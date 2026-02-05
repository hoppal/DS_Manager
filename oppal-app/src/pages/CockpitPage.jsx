import { StatCard, Alert, DonutChart } from '@prism/ui';
import { DollarSign, Users, ShoppingCart, AlertTriangle } from 'lucide-react';

const recentActivity = [
  { action: 'New supplier onboarded', detail: 'MedicaPro Systems', time: '2 hours ago' },
  { action: 'Contract renewed', detail: 'VitaPharm Logistics — 2-year term', time: '5 hours ago' },
  { action: 'Risk alert triggered', detail: 'NeoSterile Supplies — Score 7.92', time: '1 day ago' },
  { action: 'Spend threshold exceeded', detail: 'IT & Software — €1.2M', time: '2 days ago' },
];

export default function CockpitPage() {
  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Spend"
          value="€90,000"
          trend="+13.93%"
          trendLabel="vs last month"
          trendDirection="up"
          icon={DollarSign}
          data={[45, 38, 52, 35, 48, 42, 55, 38]}
        />
        <StatCard
          title="Active Suppliers"
          value="289"
          trend="-2.1%"
          trendLabel="vs last month"
          trendDirection="down"
          icon={Users}
        />
        <StatCard
          title="Open Orders"
          value="47"
          trend="+5.2%"
          trendLabel="vs last month"
          trendDirection="up"
          icon={ShoppingCart}
        />
        <StatCard
          title="Risk Alerts"
          value="12"
          trend="+3"
          trendLabel="new this week"
          trendDirection="up"
          icon={AlertTriangle}
        />
      </div>

      {/* Alerts */}
      <Alert variant="warning" title="Budget threshold approaching">
        IT & Software category has reached 85% of the quarterly budget allocation. Review and adjust if needed.
      </Alert>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Key Metrics */}
        <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {[
            { title: 'Compliance Rate', value: 82, label: 'Compliant' },
            { title: 'Contracted %', value: 60, label: 'Contracted' },
            { title: 'On-Time Delivery', value: 91, label: 'On-Time' },
          ].map((metric) => (
            <div key={metric.title} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <h3 className="text-xs font-medium text-neutral-600 uppercase tracking-wide mb-3">
                {metric.title}
              </h3>
              <DonutChart value={metric.value} label={metric.label} size={100} strokeWidth={12} />
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {recentActivity.map((item, i) => (
              <div key={i} className="px-6 py-4 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{item.action}</p>
                    <p className="text-sm text-neutral-600 mt-0.5">{item.detail}</p>
                  </div>
                  <span className="text-xs text-neutral-500 whitespace-nowrap ml-4">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
