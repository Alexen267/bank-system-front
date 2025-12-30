<script setup lang="ts">
  definePageMeta({
    layout: 'app',
  });
  type RevenueDataItem = {
    month: string;
    desktop: number;
    mobile: number;
  };

  const RevenueData: RevenueDataItem[] = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ];
  const RevenueCategoriesMultple = {
    desktop: { name: 'Desktop', color: '#3b82f6' },
    mobile: { name: 'Mobile', color: '#22c55e' },
  };
  const xFormatter = (i: number): string => `${RevenueData[i]?.month}`;
  const yFormatter = (tick: number, _i?: number, _ticks?: number[]) =>
    tick.toString();
</script>

<template>
  <section>
    <h1 class="text-2xl flex flex-col font-poppins mb-6">
      <span class="mb-1 text-blue-950">DASHBOARD</span>
      <span class="text-sm font-medium text-blue-950"
        >Resumo das operações mensais</span
      >
    </h1>
    <div class="overflow-x-scroll flex gap-4 w-full flex-nowrap pb-4 mb-5">
      <UiDashboardCard
        icon="material-symbols:currency-exchange"
        title="Total recebido"
      />
      <UiDashboardCard
        icon="material-symbols:send-money"
        title="Total enviado"
      />
      <UiDashboardCard
        icon="material-symbols:attach-money"
        title="Total em conta"
      />
      <UiDashboardCard
        icon="material-symbols:pending-actions"
        title="Pendente"
      />
    </div>
    <div class="py-4">
      <BarChart
        class="w-1/2 px-7 py-4 rounded-lg bg-white"
        :data="RevenueData"
        :stacked="true"
        :height="300"
        :categories="RevenueCategoriesMultple"
        :y-axis="['desktop', 'mobile']"
        :group-padding="0"
        :bar-padding="0.2"
        :x-num-ticks="6"
        :radius="4"
        :x-formatter="xFormatter"
        :y-formatter="yFormatter"
        :legend-position="LegendPosition.TopRight"
        :hide-legend="false"
        :y-grid-line="true"
      />
    </div>
  </section>
</template>
