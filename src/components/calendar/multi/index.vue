<script lang="ts" setup>
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import multiMonthPlugin from "@fullcalendar/multimonth";
import listPlugin from "@fullcalendar/list";
import { INITIAL_EVENTS } from "@/components/calendar/utils.ts";
import { Event } from "@/components/calendar/types.ts";
import CreateEditModal from "@/components/calendar/CreateEditModal.vue";

const event: Event = {
  title: "",
  date: "",
  category: ""
};

const fullCalendar = ref<any>(null);
const showModal = ref(false);
const dataEdit = ref(false);
const submitted = ref(false);
const edit = ref<any>({});

const calendarOptions: any = {
  timeZone: "UTC",
  droppable: true,
  navLinks: true,
  multiMonthMaxColumns: 1,
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin,
    bootstrapPlugin,
    listPlugin,
    multiMonthPlugin
  ],
  themeSystem: "tailwindcss",
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
  },
  windowResize: () => {
    const newView = getInitialView();
    const calendarApi = fullCalendar.value?.getApi();
    if (calendarApi) {
      calendarApi.changeView(newView);
    }
  },
  initialView: "multiMonthYear",
  initialEvents: INITIAL_EVENTS, // Replace with actual initial events
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  dateClick: dateClicked,
  eventClick: editEventDetails
};

function getInitialView(): string {
  if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    return "timeGridWeek";
  } else if (window.innerWidth <= 768) {
    return "listMonth";
  } else {
    return "multiMonthYear";
  }
}

function dateClicked(info: any): void {
  event.title = null;
  event.category = null;
  event.date = info;
  showModal.value = true;
  dataEdit.value = false;
}

function editEventDetails(info: any): void {
  edit.value = info.event;
  event.title = edit.value.title;
  event.category = edit.value.classNames;
  event.date = edit.value.start;
  dataEdit.value = true;
  showModal.value = true;
}

function handleSubmit(event: any): void {
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
        classNames: event.category
      });

      showModal.value = false;
      event.value = {};
    }
  }
}
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
    <div class="xl:col-span-12">
      <div class="card">
        <div class="card-body">
          <FullCalendar ref="fullCalendar" :options="calendarOptions" />
        </div>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end grid-->

  <CreateEditModal
    v-if="showModal"
    v-model="showModal"
    :dataEdit="dataEdit"
    :data="event"
    @handleSubmit="handleSubmit"
  />
</template>
