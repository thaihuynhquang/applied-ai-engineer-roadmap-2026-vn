import { getSprintModules, getMetaData } from './data/planData';
import { getState } from './state/storage';

export interface ProgressSummary {
  overallPercentage: number;
  completedDeliverablesCount: number;
  totalDeliverablesCount: number;
  completedPomodorosCount: number;
  totalPomodorosCount: number;
  completedHours: number;
  remainingHours: number;
  sprintProgresses: {
    sprintId: string;
    moduleNum: number;
    title: string;
    completedCount: number;
    totalCount: number;
    percentage: number;
  }[];
  currentSprintNum: number;
  nextTask?: {
    id: string;
    title: string;
    sprintTitle: string;
  };
}

export const calculateProgress = (): ProgressSummary => {
  const SPRINT_MODULES = getSprintModules();
  const META_DATA = getMetaData();
  const { checked } = getState();

  // 1. Deliverables (Tasks) Progress
  let completedDeliverables = 0;
  let totalDeliverables = 0;

  const sprintProgresses = SPRINT_MODULES.map((sprint) => {
    let sprintCompleted = 0;
    const sprintTotal = sprint.deliverables.length;

    sprint.deliverables.forEach((task) => {
      totalDeliverables++;
      if (checked[task.id]) {
        completedDeliverables++;
        sprintCompleted++;
      }
    });

    const percentage = sprintTotal > 0 ? Math.round((sprintCompleted / sprintTotal) * 100) : 0;

    return {
      sprintId: sprint.id,
      moduleNum: sprint.moduleNum,
      title: sprint.title,
      completedCount: sprintCompleted,
      totalCount: sprintTotal,
      percentage,
    };
  });

  // 2. Pomodoros Progress
  let completedPomodoros = 0;
  const totalPomodoros = META_DATA.totalPomodoros; // 150

  const state = getState();
  const legacyCheckedPoms = Object.keys(state.checked).filter((k) => k.startsWith('pom_') && state.checked[k]).length;
  const sessionPoms = (state.pomodoroSessions || []).length;
  completedPomodoros = Math.max(legacyCheckedPoms, sessionPoms);


  // 3. Combined percentage (weighted average of deliverables 60% and pomodoros 40%)
  const deliverablesPct = totalDeliverables > 0 ? (completedDeliverables / totalDeliverables) * 100 : 0;
  const pomodorosPct = totalPomodoros > 0 ? (completedPomodoros / totalPomodoros) * 100 : 0;

  const overallPercentage = Math.round(deliverablesPct * 0.6 + pomodorosPct * 0.4);

  // 4. Hours Completed & Remaining
  const completedHours = Math.round((completedPomodoros * 50) / 60);
  const remainingHours = Math.max(0, META_DATA.totalHours - completedHours);

  // 5. Current Sprint Determination
  let currentSprintNum = 0;
  for (let i = 0; i < sprintProgresses.length; i++) {
    if (sprintProgresses[i].percentage < 100) {
      currentSprintNum = sprintProgresses[i].moduleNum;
      break;
    }
  }

  // 6. Find Next Incomplete Task
  let nextTask: ProgressSummary['nextTask'] = undefined;
  for (const sprint of SPRINT_MODULES) {
    for (const task of sprint.deliverables) {
      if (!checked[task.id]) {
        nextTask = {
          id: task.id,
          title: task.title,
          sprintTitle: sprint.title,
        };
        break;
      }
    }
    if (nextTask) break;
  }

  return {
    overallPercentage,
    completedDeliverablesCount: completedDeliverables,
    totalDeliverablesCount: totalDeliverables,
    completedPomodorosCount: completedPomodoros,
    totalPomodorosCount: totalPomodoros,
    completedHours,
    remainingHours,
    sprintProgresses,
    currentSprintNum,
    nextTask,
  };
};
