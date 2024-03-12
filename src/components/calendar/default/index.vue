<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";
import { INITIAL_EVENTS } from "@/components/calendar/utils.ts";
import { Event } from "@/components/calendar/types.ts";
import CreateEditModal from "@/components/calendar/CreateEditModal.vue";
import Choices from "choices.js";

const fullCalendar = ref<any>(null);
const dataEdit = ref(false);
const submitted = ref(false);
const selectedLocale = "en";
const weekChecked = ref(false);
const businessChecked = ref(false);
const showModal = ref(false);
const edit = ref<any>({});
const noSearchChoice = ref<any>(null);
const event: Event = {
  title: "",
  date: "",
  category: "",
};

onMounted(() => {
  const externalEventContainerEl = document.getElementById("external-events");
  if (externalEventContainerEl) {
    new Draggable(externalEventContainerEl, {
      itemSelector: ".external-event",
      eventData: function (eventEl) {
        const event = {
          id: eventEl.getAttribute("data-event-id"),
          title: eventEl.innerText.trim(),
        };
        return event;
      },
    });
  }

  const noSearchElement: any = document.querySelector("#locale-select");
  noSearchChoice.value = new Choices(noSearchElement, {
    searchEnabled: false,
    allowHTML: true,
  });
});

onBeforeUnmount(() => {
  noSearchChoice.value.destroy();
});

const calendarOptions: any = {
  timeZone: "local",
  droppable: true,
  navLinks: true,
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
    bootstrapPlugin,
    listPlugin,
  ],
  themeSystem: "tailwindcss",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
  },
  windowResize: () => {
    const newView = getInitialView();
    const calendarApi = fullCalendar.value?.getApi();
    if (calendarApi) {
      calendarApi.changeView(newView);
    }
  },
  initialView: getInitialView(),
  initialEvents: INITIAL_EVENTS, // Replace with actual initial events
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  dateClick: dateClicked,
  eventClick: editEventDetails,
};

function getInitialView(): string {
  if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    return "timeGridWeek";
  } else if (window.innerWidth <= 768) {
    return "listMonth";
  } else {
    return "dayGridMonth";
  }
}

function dateClicked(info: any) {
  event.title = null;
  event.category = null;
  event.date = info;
  showModal.value = true;
  dataEdit.value = false;
}

function editEventDetails(info: any) {
  edit.value = info.event;
  event.title = edit.value.title;
  event.category = edit.value.classNames;
  event.date = edit.value.start;
  dataEdit.value = true;
  showModal.value = true;
}

function handleSubmit(event: any) {
  if (dataEdit.value == true) {
    submitted.value = true;

    if (submitted.value && event.title && event.category) {
      edit.value.setProp("title", event.title);
      edit.value.setProp("classNames", event.category);
      showModal.value = false;
    }
  } else {
    submitted.value = true;
    if (submitted.value && event.title && event.category) {
      const calendarApi = fullCalendar.value.getApi();
      calendarApi.addEvent({
        id: Math.floor(Math.random() * 100 + 20) - 20,
        title: event.title,
        start: event.date.dateStr,
        end: event.date.dateStr,
        classNames: event.category,
      });

      showModal.value = false;
      event.value = {};
    }
  }
}

function changeLocale(locale: any) {
  fullCalendar.value?.getApi()?.setOption("locale", locale);
}

const weekNumber = () => {
  fullCalendar.value?.getApi()?.setOption("weekNumbers", weekChecked.value);
};

const businessHours = () => {
  const businessHoursOption = businessChecked.value
    ? { daysOfWeek: [1, 2, 3, 4, 5], startTime: "10:00", endTime: "18:00" }
    : [];
  fullCalendar.value?.getApi()?.setOption("businessHours", businessHoursOption);
};
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
    <div class="xl:col-span-9">
      <TCard>
        <div cursor-pointerid="calendar-container">
          <FullCalendar ref="fullCalendar" :options="calendarOptions" />
        </div>
      </TCard>
    </div>
    <div class="xl:col-span-3">
      <TCard>
        <h6 class="mb-4 text-15">Draggable Events</h6>
        <div id="external-events" class="flex flex-col gap-3 mb-4">
          <TButton variant="soft" color="sky" class="external-event">
            My Event 1
          </TButton>
          <TButton variant="soft" color="green" class="external-event">
            My Event 2
          </TButton>
          <TButton color="yellow" variant="soft" class="external-event">
            My Event 3
          </TButton>
          <TButton color="sky" variant="soft" class="external-event">
            My Event 4
          </TButton>
          <TButton color="purple" variant="soft" class="external-event">
            My Event 5
          </TButton>
          <div>
            <label
              for="locale-select"
              class="inline-block mb-2 text-base font-medium"
              >Locale:</label
            >
            <select
              id="locale-select"
              name="locale-select"
              v-model="selectedLocale"
              class="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
              @change="changeLocale(selectedLocale)"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="it">Italiana</option>
              <option value="ru">русский</option>

              <!-- Add more locales as needed -->
            </select>
          </div>
          <div class="flex items-center gap-2">
            <input
              id="drop-remove"
              class="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800"
              type="checkbox"
            />
            <label for="drop-remove" class="align-middle cursor-pointer">
              Remove after drop
            </label>
          </div>
          <div class="flex items-center gap-2">
            <input
              id="businessCalendar"
              v-model="businessChecked"
              @click="businessHours"
              class="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800"
              type="checkbox"
            />
            <label for="businessCalendar" class="align-middle cursor-pointer">
              Business Hours & Week
            </label>
          </div>

          <div class="flex items-center gap-2">
            <input
              id="weekNumberCalendar"
              v-model="weekChecked"
              @click="weekNumber"
              class="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800"
              type="checkbox"
            />
            <label for="weekNumberCalendar" class="align-middle cursor-pointer">
              Week Number
            </label>
          </div>
        </div>
      </TCard>
    </div>
  </div>

  <CreateEditModal
    v-if="showModal"
    v-model="showModal"
    :dataEdit="dataEdit"
    :data="event"
    @handleSubmit="handleSubmit"
  />
</template>
