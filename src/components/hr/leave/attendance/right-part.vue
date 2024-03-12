<script lang="ts" setup>
import Multiselect from "@vueform/multiselect";

const employeeOptions = [
    { value: '', label: 'Select Employee' },
    { value: 'Willie Torres', label: 'Willie Torres' },
    { value: 'Patricia Garcia', label: 'Patricia Garcia' },
    { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
    { value: 'Thomas Hatfield', label: 'Thomas Hatfield' },
    { value: 'Juliette Fecteau', label: 'Juliette Fecteau' },
    { value: 'Nancy Reynolds', label: 'Nancy Reynolds' },
    { value: 'Holly Kavanaugh', label: 'Holly Kavanaugh' },
    { value: 'Jonas Frederiksen', label: 'Jonas Frederiksen' }
];

const employee = "";
</script>

<template>
    <div class="lg:col-span-12 xl:col-span-3 xl:row-span-2">
        <div class="mb-5">
            <label for="deliveryStatusSelect" class="inline-block mb-2 text-base font-medium">Select Employee</label>
            <Multiselect :options="employeeOptions" v-model="employee" />
        </div>
        <TCard>
            <div class="text-center">
                <div class="size-20 mx-auto rounded-full bg-slate-100 dark:bg-zink-600">
                    <img src="@/assets/images/users/user-3.jpg" alt="" class="h-20 rounded-full">
                </div>
                <h6 class="mt-3 mb-1 text-16"><a href="#!">Willie Torres</a></h6>
                <p class="text-slate-500 dark:text-zink-200">Product Designer</p>
            </div>
            <div class="mt-5 overflow-x-auto">
                <table class="w-full mb-0">
                    <tbody>
                        <tr>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Employee ID</td>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">#TWE1001501</td>
                        </tr>
                        <tr>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Experience</td>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">3 Year</td>
                        </tr>
                        <tr>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Joining Date</td>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">05 Feb, 2020</td>
                        </tr>
                        <tr>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Total Hours (Years)</td>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">953.8 Hrs</td>
                        </tr>
                        <tr>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Total Hours</td>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">218.4 Hrs</td>
                        </tr>
                        <tr>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Regular Hours</td>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">172 Hrs</td>
                        </tr>
                        <tr>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Overtime</td>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">24 Hrs</td>
                        </tr>
                        <tr>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent text-slate-500 dark:text-zink-200">Holiday</td>
                            <td class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent font-semibold">22.40 Hrs</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </TCard>
    </div>
</template>