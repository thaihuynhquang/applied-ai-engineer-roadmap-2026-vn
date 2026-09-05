export interface Task {
  id: string;
  title: string;
  description?: string;
  hoursEstimate?: number;
  pomodoros?: number;
  deliverables?: string[];
  tags?: string[];
  link?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'course' | 'docs' | 'repo' | 'tool';
  description: string;
  url: string;
  moduleId: string;
  isFree: boolean;
}

export interface SprintModule {
  id: string;
  moduleNum: number;
  title: string;
  subtitle: string;
  statusColor: string;
  duration: string;
  objectives: string[];
  knowledgeToLoad: string[];
  deliverables: Task[];
  resources: ResourceItem[];
}

export interface TechStackLayer {
  layerNum: number;
  name: string;
  description: string;
  items: {
    name: string;
    role: string;
    usageShare?: string;
    isPrimaryChoice?: boolean;
    note?: string;
  }[];
}

export interface PomodoroSessionLog {
  id: string;
  timestamp: number;
  durationMinutes: number;
  taskId?: string;
  taskTitle?: string;
  preset: '25/5' | '50/5' | 'custom';
}

export interface PomodoroTimerSettings {
  preset: '25/5' | '50/5' | 'custom';
  focusDuration: number; // in minutes
  breakDuration: number; // in minutes
  longBreakDuration: number; // in minutes
  autoStartBreaks: boolean;
  soundEnabled: boolean;
  notificationEnabled: boolean;
}

export interface ModuleQuitRule {
  moduleId: string;
  moduleNum: number;
  moduleName: string;
  quotaPoms: number;
  trigger: string;
  pivotAction: string;
  isOptional?: boolean;
}

export interface QuitProcessStep {
  stepNum: number;
  title: string;
  description: string;
  iconName: string;
}

export interface QuitCriteriaData {
  title: string;
  subtitle: string;
  docPath: string;
  dailyProcess: QuitProcessStep[];
  decisionMatrix: ModuleQuitRule[];
}

export interface ProjectMeta {
  title: string;
  subtitle: string;
  targetProject: string;
  totalWeeks: number;
  totalPomodoros: number;
  totalHours: number;
  hoursPerDay: number;
  principles: string[];
  systemArchitecture: {
    frontend: string;
    backend: string;
    database: string;
    llms: string;
    observability: string;
  };
}

export interface PlanDataBundle {
  META_DATA: ProjectMeta;
  SPRINT_MODULES: SprintModule[];
  TECH_STACK_LAYERS: TechStackLayer[];
  QUIT_CRITERIA_DATA: QuitCriteriaData;
}

export interface AppState {
  checked: Record<string, boolean>;
  resourceFlags: Record<string, boolean>;
  activeTab: string;
  theme: 'dark' | 'light';
  lang: 'vi' | 'en';
  pomodoroSettings?: PomodoroTimerSettings;
  pomodoroSessions?: PomodoroSessionLog[];
}


