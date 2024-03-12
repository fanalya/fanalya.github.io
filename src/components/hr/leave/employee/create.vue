<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import Choices from "choices.js";

const formInputClass =
  "form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200";

const form = {
  type: "",
  remain: "",
  from: "",
  to: "",
  totalDays: "",
  leaveDay: "",
  reason: ""
};

const config = {
  altFormat: "M j, Y",
  dateFormat: "d M, Y"
};

const leaveType = ref<any>(null);
const leaveDay = ref<any>(null);

onMounted(() => {
  const leaveEle: any = document.querySelector("#leaveType");
  if (leaveEle) {
    leaveType.value = new Choices(leaveEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }

  const leaveDayEle: any = document.querySelector("#leaveDayInput");
  if (leaveDayEle) {
    leaveDay.value = new Choices(leaveDayEle, {
      searchEnabled: false,
      allowHTML: true
    });
  }
});

onBeforeUnmount(() => {
  leaveType.value.destroy();
  leaveDay.value.destroy();
});
</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
    <div class="xl:col-span-9">
      <TCard>
        <h6 class="mb-4 text-15 grow">Apply Leave</h6>
        <form>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
            <div class="xl:col-span-6">
              <div>
                <label
                  for="leaveType"
                  class="inline-block mb-2 text-base font-medium"
                  >Leave Type</label
                >
                <select
                  class="form-input border-slate-200 focus:outline-none focus:border-custom-500"
                  name="leaveType"
                  id="leaveType"
                >
                  <option value="">Select Leave Type</option>
                  <option value="Medical Leave">Medical Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Annual Leave">Annual Leave</option>
                </select>
              </div>
            </div>
            <div class="xl:col-span-6">
              <div>
                <label
                  for="remainingLeaves"
                  class="inline-block mb-2 text-base font-medium"
                  >Remaining Leaves</label
                >
                <input
                  type="text"
                  id="remainingLeaves"
                  :class="formInputClass"
                  value="18"
                  disabled
                />
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
                <label
                  for="numberOfDayLeaves"
                  class="inline-block mb-2 text-base font-medium"
                  >Number of Days</label
                >
                <input
                  type="text"
                  id="numberOfDayLeaves"
                  :class="formInputClass"
                  value="01"
                  disabled
                />
              </div>
            </div>
            <div class="xl:col-span-6">
              <label
                for="leaveDayInput"
                class="inline-block mb-2 text-base font-medium"
                >Leave Day</label
              >
              <select
                class="form-input border-slate-200 focus:outline-none focus:border-custom-500"
                data-choices
                data-choices-search-false
                name="leaveDayInput"
                id="leaveDayInput"
              >
                <option value="">Select Leave Day</option>
                <option value="Full Day">Full Day</option>
                <option value="Half Day">Half Day</option>
              </select>
            </div>
            <div class="md:col-span-2 xl:col-span-12">
              <div>
                <label
                  for="reasonInput"
                  class="inline-block mb-2 text-base font-medium"
                  >Reason</label
                >
                <textarea
                  :class="formInputClass"
                  id="reasonInput"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="flex justify-end gap-2 mt-4">
            <TButton type="reset" variant="ghost" color="red">Reset</TButton>
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
              <tr>
                <td
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  Medical Leave
                </td>
                <th
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  04
                </th>
              </tr>
              <tr>
                <td
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  Casual Leave
                </td>
                <th
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  08
                </th>
              </tr>
              <tr>
                <td
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  Sick Leave
                </td>
                <th
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  03
                </th>
              </tr>
              <tr>
                <td
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  Annual Leave
                </td>
                <th
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  12
                </th>
              </tr>
              <tr>
                <td
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  Use Leave
                </td>
                <th
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  09
                </th>
              </tr>
              <tr>
                <td
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  Remaining Leave
                </td>
                <th
                  class="px-3.5 py-2.5 first:pl-0 last:pr-0 border-y border-transparent"
                >
                  18
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </TCard>
    </div>
  </div>
</template>
