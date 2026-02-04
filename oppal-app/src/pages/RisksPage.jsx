import { DataTable, Alert, StatCard } from '@prism/ui';
import { AlertTriangle, ShieldAlert, ShieldCheck } from 'lucide-react';

const riskData = [
  { supplier: 'NeoSterile Supplies', score: '7.92', category: 'Sterile Packaging', status: 'Critical', trend: '+1.2' },
  { supplier: 'FlexiMed Robotics', score: '8.31', category: 'Medical Robotics', status: 'Critical', trend: '+0.5' },
  { supplier: 'MedicaPro Systems', score: '6.85', category: 'Surgical Equipment', status: 'High', trend: '-0.3' },
  { supplier: 'PharmaFlow Inc.', score: '5.63', category: 'Drug Logistics', status: 'Medium', trend: '+0.8' },
  { supplier: 'TechSphere Solutions', score: '4.12', category: 'IT Infrastructure', status: 'Low', trend: '-1.1' },
  { supplier: 'VitaPharm Logistics', score: '3.47', category: 'Pharmaceutical Distribution', status: 'Low', trend: '-0.2' },
];

const riskColumns = [
  { header: 'Supplier', key: 'supplier', fontWeight: 'medium' },
  {
    header: 'Risk Score', key: 'score', align: 'right', fontWeight: 'medium',
    render: (row) => {
      const score = parseFloat(row.score);
      const color = score >= 7 ? 'text-error-600' : score >= 5 ? 'text-warning-600' : 'text-success-600';
      return <span className={`font-semibold ${color}`}>{row.score}</span>;
    }
  },
  { header: 'Category', key: 'category' },
  {
    header: 'Status', key: 'status',
    render: (row) => {
      const colors = {
        Critical: 'bg-error-50 text-error-700 border-error-200',
        High: 'bg-warning-50 text-warning-700 border-warning-200',
        Medium: 'bg-primary-50 text-primary-700 border-primary-200',
        Low: 'bg-success-50 text-success-700 border-success-200',
      };
      return (
        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${colors[row.status]}`}>
          {row.status}
        </span>
      );
    }
  },
  {
    header: 'Trend', key: 'trend', align: 'right',
    render: (row) => {
      const val = parseFloat(row.trend);
      const color = val > 0 ? 'text-error-600' : 'text-success-600';
      return <span className={`text-sm font-medium ${color}`}>{row.trend}</span>;
    }
  },
];

export default function RisksPage() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Critical Risks"
          value="2"
          trend="+1"
          trendLabel="this month"
          trendDirection="up"
          icon={ShieldAlert}
        />
        <StatCard
          title="Average Risk Score"
          value="6.05"
          trend="+0.3"
          trendLabel="vs last month"
          trendDirection="up"
          icon={AlertTriangle}
        />
        <StatCard
          title="Low Risk Suppliers"
          value="184"
          trend="+12"
          trendLabel="vs last month"
          trendDirection="up"
          icon={ShieldCheck}
        />
      </div>

      <Alert variant="error" title="Critical risk suppliers detected">
        2 suppliers have risk scores above 7.5. Immediate review recommended.
      </Alert>

      {/* Risk Table */}
      <DataTable
        title="Supplier Risk Assessment"
        columns={riskColumns}
        data={riskData}
      />
    </div>
  );
}
