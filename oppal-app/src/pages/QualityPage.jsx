import { StatCard, DataTable, DonutChart } from '@oppal/ui';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const qualityData = [
  { supplier: 'MedicaPro Systems', score: '94%', defectRate: '0.8%', deliveryRate: '97%', status: 'Approved' },
  { supplier: 'VitaPharm Logistics', score: '87%', defectRate: '2.1%', deliveryRate: '91%', status: 'Approved' },
  { supplier: 'NeoSterile Supplies', score: '72%', defectRate: '4.5%', deliveryRate: '85%', status: 'Under Review' },
  { supplier: 'FlexiMed Robotics', score: '91%', defectRate: '1.2%', deliveryRate: '95%', status: 'Approved' },
  { supplier: 'TechSphere Solutions', score: '88%', defectRate: '1.8%', deliveryRate: '93%', status: 'Approved' },
];

const qualityColumns = [
  { header: 'Supplier', key: 'supplier', fontWeight: 'medium' },
  { header: 'Quality Score', key: 'score', align: 'right', fontWeight: 'medium' },
  { header: 'Defect Rate', key: 'defectRate', align: 'right' },
  { header: 'On-Time Delivery', key: 'deliveryRate', align: 'right' },
  {
    header: 'Status', key: 'status',
    render: (row) => {
      const approved = row.status === 'Approved';
      return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${approved
            ? 'bg-success-50 text-success-700 border-success-200'
            : 'bg-warning-50 text-warning-700 border-warning-200'
          }`}>
          {approved ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
          {row.status}
        </span>
      );
    }
  },
];

export default function QualityPage() {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Approved Suppliers" value="241" icon={CheckCircle} />
        <StatCard title="Under Review" value="36" icon={Clock} />
        <StatCard title="Rejected" value="12" icon={XCircle} />
      </div>

      {/* Quality Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: 'Avg Quality Score', value: 86, label: 'Score' },
          { title: 'On-Time Rate', value: 92, label: 'On-Time' },
          { title: 'Defect-Free', value: 95, label: 'Clean' },
        ].map((metric) => (
          <div key={metric.title} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <h3 className="text-xs font-medium text-neutral-600 uppercase tracking-wide mb-4">
              {metric.title}
            </h3>
            <DonutChart value={metric.value} label={metric.label} />
          </div>
        ))}
      </div>

      {/* Quality Table */}
      <DataTable
        title="Supplier Quality Assessments"
        columns={qualityColumns}
        data={qualityData}
      />
    </div>
  );
}
