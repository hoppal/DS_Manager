import { StatCard, DataTable, DonutChart } from '@prism/ui';
import { DollarSign, Users, ShoppingCart } from 'lucide-react';

const spendChartData = [45, 38, 52, 35, 48, 42, 55, 38, 45, 50, 40, 48, 35, 58, 45, 42, 50, 48];
const suppliersChartData = [55, 48, 42, 50, 45, 52, 48, 55, 42, 50, 58, 45, 50, 42, 38, 45, 48, 40];
const orderChartData = [42, 45, 48, 50, 52, 48, 45, 50, 55, 48, 45, 50, 48, 52, 45, 48, 50, 52];

const categories = [
  { name: 'Medical Equipment', percent: 27, delivered: '1,150' },
  { name: 'IT & Software', percent: 16, delivered: '1,890' },
  { name: 'Building & Infra', percent: 38, delivered: '1,690' },
  { name: 'Admin & Stationery', percent: 14, delivered: '1,750,000' },
  { name: 'Sterilization Materials', percent: 24, delivered: '1,980,110' },
];

const suppliers = [
  { class: 'A', name: 'MedicaPro Systems', spend: '$6,120,560', risk: '6.85', category: 'Surgical Equipment' },
  { class: 'B', name: 'VitaPharm Logistics', spend: '$2,145,980', risk: '3.47', category: 'Pharmaceutical Distribution' },
  { class: 'C', name: 'NeoSterile Supplies', spend: '$1,785,230', risk: '7.92', category: 'Sterile Packaging' },
  { class: 'A', name: 'FlexiMed Robotics', spend: '$3,994,120', risk: '8.31', category: 'Medical Robotics' },
  { class: 'B', name: 'TechSphere Solutions', spend: '$1,290,400', risk: '4.12', category: 'IT Infrastructure' },
  { class: 'A', name: 'PharmaFlow Inc.', spend: '$4,875,320', risk: '5.63', category: 'Drug Logistics' },
];

const supplierColumns = [
  { header: "Supplier's Class", key: 'class', fontWeight: 'medium' },
  { header: 'Supplier Name', key: 'name' },
  { header: 'Spend', key: 'spend', align: 'right', fontWeight: 'medium' },
  { header: 'Risk Score', key: 'risk', align: 'right' },
  { header: 'Category', key: 'category' },
];

export default function SpendPage() {
  return (
    <div className="space-y-6">
      {/* Stat Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard
          title="Total Spend"
          value="€90,000"
          trend="+13.93%"
          trendLabel="vs last week"
          trendDirection="up"
          icon={DollarSign}
          data={spendChartData}
        />
        <StatCard
          title="Total Suppliers"
          value="289"
          trend="-13.93%"
          trendLabel="vs last week"
          trendDirection="down"
          icon={Users}
          data={suppliersChartData}
        />
        <StatCard
          title="Average Order Value"
          value="€36,056"
          trend="+18.63%"
          trendLabel="vs last week"
          trendDirection="up"
          icon={ShoppingCart}
          data={orderChartData}
        />
      </div>

      {/* Middle Row - Categories & Donut Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spend by Category */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-6">
            Spend by Category
          </h2>
          <div className="space-y-5">
            {categories.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="font-medium text-neutral-900">{item.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-neutral-900">{item.percent}%</span>
                    <span className="text-neutral-600 tabular-nums">{item.delivered}</span>
                  </div>
                </div>
                <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-500 rounded-full transition-all duration-500"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donut Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Spend Pareto', value: 20, label: 'Top Spend' },
            { title: 'Contracted Spend', value: 60, label: 'Contracted' },
            { title: 'Assessed Spend', value: 50, label: 'Assessed' },
          ].map((chart) => (
            <div key={chart.title} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <h3 className="text-xs font-medium text-neutral-600 uppercase tracking-wide mb-4 text-center">
                {chart.title}
              </h3>
              <DonutChart value={chart.value} label={chart.label} />
            </div>
          ))}
        </div>
      </div>

      {/* Suppliers Management Table */}
      <DataTable
        title="Suppliers Management"
        columns={supplierColumns}
        data={suppliers}
        headerAction={
          <select className="px-3 py-1.5 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        }
      />
    </div>
  );
}
