<script lang="ts" setup>
import Multiselect from "@vueform/multiselect";

const formInputClass = "form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200";

const employeeOptions = [
    { value: '', label: 'Select Employee' },
    { value: 'Willie Torres', label: 'Willie Torres' },
    { value: 'Patricia Garcia', label: 'Patricia Garcia' },
    { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
    { value: 'Thomas Hatfield', label: 'Thomas Hatfield' },
    { value: 'Willie Torres', label: 'Willie Torres' },
    { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
    { value: 'Nancy Reynolds', label: 'Nancy Reynolds' },
    { value: 'Holly Kavanaugh', label: 'Holly Kavanaugh' },
    { value: 'Jonas Frederiksen', label: 'Jonas Frederiksen' }
];

const leaveOptions = [
    { label: 'Medical Leave', value: '4' },
    { label: 'Casual Leave', value: '8' },
    { label: 'Sick Leave', value: '3' },
    { label: 'Annual Leave', value: '12' },
    { label: 'Use Leave', value: '9' },
    { label: 'Remaining Leave', value: '18' },
];

const leaveDayOptions = [
    { value: '', label: 'Select Leave Day' },
    { value: 'Full Day', label: 'Full Day' },
    { value: 'Half Day', label: 'Half Day' }
];

const form = {
    employee: "",
    employeeId: "",
    type: "",
    remain: "",
    from: "",
    to: "",
    totalDays: "",
    leaveDay: "",
    reason: ""
}

const config = {
    altFormat: "M j, Y",
    dateFormat: "d M, Y"
}
</script>

<template>
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
        <div class="xl:col-span-9">
            <TCard>
                <h6 class="mb-4 text-15 grow">Add Leave</h6>
                <form action="#!">
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
                        <div class="xl:col-span-6">
                            <div>
                                <label for="employeeName" class="inline-block mb-2 text-base font-medium">Employee</label>
                                <Multiselect :options="employeeOptions" v-model="form.employee" />
                            </div>
                        </div>
                        <div class="xl:col-span-6">
                            <div>
                                <label for="employeeId" class="inline-block mb-2 text-base font-medium">Employee ID</label>
                                <input type="text" id="employeeId" :class="formInputClass" value="#TWE1001501" disabled>
                            </div>
                        </div>
                        <div class="xl:col-span-6">
                            <div>
                                <label for="leaveType" class="inline-block mb-2 text-base font-medium">Leave Type</label>
                                <Multiselect :options="leaveOptions" v-model="form.type" />
                            </div>
                        </div>
                        <div class="xl:col-span-6">
                            <div>
                                <label for="remainingLeaves" class="inline-block mb-2 text-base font-medium">Remaining Leaves</label>
                                <input type="text" id="remainingLeaves" :class="formInputClass" value="18" disabled>
                            </div>
                        </div>
                        <div class="xl:col-span-6">
                            <TFlatPicker label="From" :config="config" />
                        </div>
                        <div class="xl:col-span-6">
                            <TFlatPicker label="To" :config="config" />
                        </div>
                        <div class="xl:col-span-6">
                            <div>
                                <label for="numberOfDayLeaves" class="inline-block mb-2 text-base font-medium">Number of Days</label>
                                <input type="text" id="numberOfDayLeaves" :class="formInputClass" value="01" disabled>
                            </div>
                        </div>
                        <div class="xl:col-span-6">
                            <label for="leaveDayInput" class="inline-block mb-2 text-base font-medium">Leave Day</label>
                            <Multiselect :options="leaveDayOptions" v-model="form.leaveDay" />
                        </div>
                        <div class="md:col-span-2 xl:col-span-12">
                            <div>
                                <label for="reasonInput" class="inline-block mb-2 text-base font-medium">Reason</label>
                                <textarea :class="formInputClass" id="reasonInput" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end gap-2 mt-4">
                        <TButton type="button" variant="ghost" color="red">Reset</TButton>
                        <TButton type="submit" color="custom">Apply Leave</TButton>
                    </div>
                </form>
            </TCard>
        </div>

        <div class="xl:col-span-3">
            <TCard>
                <h6 class="mb-4 text-15">Leave Information (2023)</h6>
                <div>
                    <table class="w-full mb-0">
                        <tbody>
                            <tr v-for="(item, index) in leaveOptions" :key="index">
                                <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">{{ item.label }}</td>
                                <th class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent">{{ item.value }}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TCard>
        </div>
    </div>
</template>