<script lang="ts" setup>

import ScrollHint from 'scroll-hint';
new ScrollHint('.js-scrollable');

const tableDataHeader = [
    { title: "ID", value: "ID" },
    { title: "Name", value: "Name" },
    { title: "Position", value: "Position" },
    { title: "Office", value: "Office" },
    { title: "Age", value: "Age" },
    { title: "Start date", value: "StartDate" },
    { title: "Salary", value: "Salary" },
]

const tableData = [
    {
        ID: '1',
        Name: 'Tiger Nixon',
        Position: 'System Architect',
        Office: 'Edinburgh',
        Age: '61',
        StartDate: '2011-04-25',
        Salary: '$320,800'
    },
    {
        ID: '2',
        Name: 'Garrett Winters',
        Position: 'Accountant',
        Office: 'Tokyo',
        Age: '63',
        StartDate: '2011-07-25',
        Salary: '$170,750'
    },
    {
        ID: '3',
        Name: 'Ashton Cox',
        Position: 'Junior Technical Autho',
        Office: 'San Francisco',
        Age: '66',
        StartDate: '2009-01-12',
        Salary: '$86,000'
    },
    {
        ID: '4',
        Name: 'Cedric Kelly',
        Position: 'Senior Javascript Developer',
        Office: 'Edinburgh',
        Age: '22',
        StartDate: '2012-03-29',
        Salary: '$433,060'
    },
    {
        ID: '5',
        Name: 'Airi Satou',
        Position: 'Accountant',
        Office: 'Tokyo',
        Age: '33',
        StartDate: '2008-11-28',
        Salary: '$162,700'
    },
    {
        ID: '6',
        Name: 'Brielle Williamson',
        Position: 'Integration Specialist',
        Office: 'New York',
        Age: '61',
        StartDate: '2012-12-02',
        Salary: '$372,000'
    },
]

</script>

<template>
    <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
        <TCard title="Simple Scroll Hint">
            <div class="overflow-x-auto js-scrollable">
                <TBasicTable :headerItems="tableDataHeader" 
                    :items="tableData" 
                    thClass="px-3.5 py-2.5 whitespace-nowrap font-semibold border-b border-slate-200 dark:border-zink-500"
                    tdClass="px-3.5 py-2.5 whitespace-nowrap border-y border-slate-200 dark:border-zink-500">
                </TBasicTable>
            </div>
        </TCard>
    </div>
</template>