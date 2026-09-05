import { exportStateJSON, importState, resetProgress } from '../state/storage';
import { showToast } from '../toast';
import { t } from '../i18n';

export const handleExportBackup = (): void => {
  const jsonStr = exportStateJSON();
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const dateStr = new Date().toISOString().slice(0, 10);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ai-engineer-roadmap-backup-${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(t('backup.toast.exported'), 'success');
};

export const handleImportBackup = (): void => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';

  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (parsed && typeof parsed === 'object') {
          importState(parsed);
          showToast(t('backup.toast.imported'), 'success');
        } else {
          showToast(t('backup.toast.invalidFile'), 'error');
        }
      } catch (err) {
        console.error(err);
        showToast(t('backup.toast.readError'), 'error');
      }
    };
    reader.readAsText(file);
  };

  input.click();
};

export const handleResetProgress = (): void => {
  const confirmed = window.confirm(t('backup.confirm.reset'));
  if (confirmed) {
    resetProgress();
    showToast(t('backup.toast.resetDone'), 'info');
  }
};
