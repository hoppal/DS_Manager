import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from '@oppal/ui';
import SpendPage from './pages/SpendPage';
import CockpitPage from './pages/CockpitPage';
import RisksPage from './pages/RisksPage';
import QualityPage from './pages/QualityPage';
import ContractsPage from './pages/ContractsPage';
import ChatPage from './pages/ChatPage';
import ManagerPage from './pages/ManagerPage';
import BudgetOverview from './pages/BudgetOverview';
import SettingsPage from './pages/SettingsPage';
import AIWorkflowPage from './pages/AIWorkflowPage';

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/manager" replace />} />
        <Route path="/cockpit" element={<CockpitPage />} />
        <Route path="/spend" element={<SpendPage />} />
        <Route path="/risks" element={<RisksPage />} />
        <Route path="/quality" element={<QualityPage />} />
        <Route path="/contracts" element={<ContractsPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/ai-workflow" element={<AIWorkflowPage />} />
        <Route path="/budget" element={<BudgetOverview />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
