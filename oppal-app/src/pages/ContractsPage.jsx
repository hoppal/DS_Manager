import { DataTable, StatCard } from '@oppal/ui';
import { FileText, FileClock, FileCheck, FileWarning } from 'lucide-react';

const contracts = [
  { id: 'CTR-2024-001', supplier: 'MedicaPro Systems', value: '$12,400,000', start: '2024-03-01', end: '2026-02-28', status: 'Active' },
  { id: 'CTR-2024-015', supplier: 'VitaPharm Logistics', value: '$4,800,000', start: '2024-06-15', end: '2026-06-14', status: 'Active' },
  { id: 'CTR-2023-042', supplier: 'NeoSterile Supplies', value: '$3,200,000', start: '2023-09-01', end: '2025-08-31', status: 'Expiring Soon' },
  { id: 'CTR-2024-028', supplier: 'FlexiMed Robotics', value: '$8,100,000', start: '2024-01-15', end: '2027-01-14', status: 'Active' },
  { id: 'CTR-2023-019', supplier: 'TechSphere Solutions', value: '$2,600,000', start: '2023-04-01', end: '2025-03-31', status: 'Expiring Soon' },
  { id: 'CTR-2024-033', supplier: 'PharmaFlow Inc.', value: '$9,750,000', start: '2024-08-01', end: '2027-07-31', status: 'Active' },
];

const contractColumns = [
  { header: 'Contract ID', key: 'id', fontWeight: 'medium' },
  { header: 'Supplier', key: 'supplier' },
  { header: 'Value', key: 'value', align: 'right', fontWeight: 'medium' },
  { header: 'Start Date', key: 'start' },
  { header: 'End Date', key: 'end' },
  {
    header: 'Status', key: 'status',
    render: (row) => {
      const active = row.status === 'Active';
      return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${active
            ? 'bg-success-50 text-success-700 border-success-200'
            : 'bg-warning-50 text-warning-700 border-warning-200'
          }`}>
          {active ? <FileCheck className="w-3 h-3" /> : <FileClock className="w-3 h-3" />}
          {row.status}
        </span>
      );
    }
  },
];

export default function ContractsPage() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Contracts" value="156" icon={FileText} />
        <StatCard title="Active" value="128" icon={FileCheck} />
        <StatCard title="Expiring Soon" value="18" icon={FileClock} />
        <StatCard title="Needs Attention" value="10" icon={FileWarning} />
      </div>

      {/* Contracts Table */}
      <DataTable
        title="Contract Management"
        columns={contractColumns}
        data={contracts}
        headerAction={
          <select className="px-3 py-1.5 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Expiring Soon</option>
            <option>Expired</option>
          </select>
        }
      />
    </div>
  );
}
