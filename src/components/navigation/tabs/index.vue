<script lang="ts" setup>
import { ref } from "vue";
import { Home, User2, Settings, Phone, CheckSquare } from "lucide-vue-next";

const defaultTab = ref("home");
const justifiedTab = ref("home");
const pillsTab = ref("home");
const justifiedPillsTab = ref("home");
const simpleTab = ref("home");
const borderTopNav = ref("home");
const iconTab = ref("home");
const arrowNavTab = ref("home");
const verticalTab = ref("home");

const defaultTabClass = `inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]`;
const pillsTabClass = `inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]`;
const simpleTabClass = `inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border-b border-transparent group-[.active]:text-custom-500 group-[.active]:border-b-custom-500 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-custom-500 -mb-[1px]`;
const borderTopNavClass = `inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent border-t-2 group-[.active]:text-red-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-t-red-500 dark:group-[.active]:border-t-red-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-red-500 active:text-red-500 dark:hover:text-red-500 dark:active:text-red-500 -mb-[1px]`;
const iconTabClass = `flex items-center px-4 py-2 text-base transition-all duration-300 ease-linear rounded-t-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:text-custom-500 group-[.active]:border-slate-200 dark:group-[.active]:border-zink-500 group-[.active]:border-b-white dark:group-[.active]:border-b-zink-700 hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px]`;
const arrowNavClass = `relative inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:group-[.active]:text-white dark:hover:text-custom-500 dark:active:text-custom-500 -mb-[1px] before:absolute before:-bottom-1.5 before:-rotate-[135deg] before:left-2/4 before:-translate-x-2/4 before:bg-transparent group-[.active]:before:bg-custom-500 before:h-3 before:w-3`;
const veticalTabClass = `inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]`;
</script>
<template>
  <div class="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
    <TCard title="Default Tabs">
      <TTabs
        v-model="defaultTab"
        class="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs"
      >
        <TTab value="home" :tabClass="defaultTabClass"> Home </TTab>
        <TTab value="profile" :tabClass="defaultTabClass"> Profile </TTab>
        <TTab value="settings" :tabClass="defaultTabClass"> Settings </TTab>
        <TTab value="contacts" :tabClass="defaultTabClass"> Contacts </TTab>
      </TTabs>
      <div v-if="defaultTab === 'home'">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic. That's why it's
        important to think about your message, then choose a font that fits.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid.
      </div>
      <div v-if="defaultTab === 'profile'">
        You've probably heard that opposites attract. The same is true for
        fonts. Don't be afraid to combine font styles that are different but
        complementary, like sans serif with serif, short with tall, or
        decorative with simple. Qui photo booth letterpress, commodo enim craft
        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
      </div>
      <div v-if="defaultTab === 'settings'">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
        Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
        banksy irony.
      </div>
      <div v-if="defaultTab === 'contacts'">
        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
        before they sold out master cleanse gluten-free squid scenester freegan
        cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
        cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
        banh mi before they sold out farm-to-table VHS.
      </div>
    </TCard>
    <TCard title="Justified Tabs">
      <TTabs
        v-model="justifiedTab"
        class="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs"
      >
        <TTab grow value="home" :tabClass="`${defaultTabClass} w-full`">
          Home
        </TTab>
        <TTab grow value="profile" :tabClass="`${defaultTabClass} w-full`">
          Profile
        </TTab>
        <TTab grow value="settings" :tabClass="`${defaultTabClass} w-full`">
          Settings
        </TTab>
        <TTab grow value="contacts" :tabClass="`${defaultTabClass} w-full`">
          Contacts
        </TTab>
      </TTabs>
      <div v-if="justifiedTab === 'home'">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic. That's why it's
        important to think about your message, then choose a font that fits.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid.
      </div>
      <div v-if="justifiedTab === 'profile'">
        You've probably heard that opposites attract. The same is true for
        fonts. Don't be afraid to combine font styles that are different but
        complementary, like sans serif with serif, short with tall, or
        decorative with simple. Qui photo booth letterpress, commodo enim craft
        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
      </div>
      <div v-if="justifiedTab === 'settings'">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
        Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
        banksy irony.
      </div>
      <div v-if="justifiedTab === 'contacts'">
        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
        before they sold out master cleanse gluten-free squid scenester freegan
        cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
        cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
        banh mi before they sold out farm-to-table VHS.
      </div>
    </TCard>
    <TCard title="Pills Tabs">
      <TTabs
        v-model="pillsTab"
        class="flex flex-wrap w-full text-sm font-medium text-center nav-tabs"
      >
        <TTab value="home" :tabClass="pillsTabClass"> Home </TTab>
        <TTab value="profile" :tabClass="pillsTabClass"> Profile </TTab>
        <TTab value="settings" :tabClass="pillsTabClass"> Settings </TTab>
        <TTab value="contacts" :tabClass="pillsTabClass"> Contacts </TTab>
      </TTabs>
      <div v-if="pillsTab === 'home'">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic. That's why it's
        important to think about your message, then choose a font that fits.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid.
      </div>
      <div v-if="pillsTab === 'profile'">
        You've probably heard that opposites attract. The same is true for
        fonts. Don't be afraid to combine font styles that are different but
        complementary, like sans serif with serif, short with tall, or
        decorative with simple. Qui photo booth letterpress, commodo enim craft
        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
      </div>
      <div v-if="pillsTab === 'settings'">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
        Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
        banksy irony.
      </div>
      <div v-if="pillsTab === 'contacts'">
        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
        before they sold out master cleanse gluten-free squid scenester freegan
        cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
        cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
        banh mi before they sold out farm-to-table VHS.
      </div>
    </TCard>
    <TCard title="Pills Justified Tabs">
      <TTabs
        v-model="justifiedPillsTab"
        class="flex flex-wrap w-full text-sm font-medium text-center nav-tabs"
      >
        <TTab grow value="home" :tabClass="`${pillsTabClass}  w-full`">
          Home
        </TTab>
        <TTab grow value="profile" :tabClass="`${pillsTabClass}  w-full`">
          Profile
        </TTab>
        <TTab grow value="settings" :tabClass="`${pillsTabClass}  w-full`">
          Settings
        </TTab>
        <TTab grow value="contacts" :tabClass="`${pillsTabClass}  w-full`">
          Contacts
        </TTab>
      </TTabs>
      <div v-if="justifiedPillsTab === 'home'">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic. That's why it's
        important to think about your message, then choose a font that fits.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid.
      </div>
      <div v-if="justifiedPillsTab === 'profile'">
        You've probably heard that opposites attract. The same is true for
        fonts. Don't be afraid to combine font styles that are different but
        complementary, like sans serif with serif, short with tall, or
        decorative with simple. Qui photo booth letterpress, commodo enim craft
        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
      </div>
      <div v-if="justifiedPillsTab === 'settings'">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
        Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
        banksy irony.
      </div>
      <div v-if="justifiedPillsTab === 'contacts'">
        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
        before they sold out master cleanse gluten-free squid scenester freegan
        cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
        cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
        banh mi before they sold out farm-to-table VHS.
      </div>
    </TCard>
    <TCard title="Simple Tabs">
      <TTabs
        v-model="simpleTab"
        class="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs"
      >
        <TTab value="home" :tabClass="`${simpleTabClass}`"> Home </TTab>
        <TTab value="profile" :tabClass="`${simpleTabClass}`"> Profile </TTab>
        <TTab value="settings" :tabClass="`${simpleTabClass}`"> Settings </TTab>
        <TTab value="contacts" :tabClass="`${simpleTabClass}`"> Contacts </TTab>
      </TTabs>
      <div v-if="simpleTab === 'home'">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic. That's why it's
        important to think about your message, then choose a font that fits.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid.
      </div>
      <div v-if="simpleTab === 'profile'">
        You've probably heard that opposites attract. The same is true for
        fonts. Don't be afraid to combine font styles that are different but
        complementary, like sans serif with serif, short with tall, or
        decorative with simple. Qui photo booth letterpress, commodo enim craft
        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
      </div>
      <div v-if="simpleTab === 'settings'">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
        Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
        banksy irony.
      </div>
      <div v-if="simpleTab === 'contacts'">
        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
        before they sold out master cleanse gluten-free squid scenester freegan
        cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
        cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
        banh mi before they sold out farm-to-table VHS.
      </div>
    </TCard>
    <TCard title="Border Top Nav">
      <TTabs
        v-model="borderTopNav"
        class="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs"
      >
        <TTab value="home" :tabClass="`${borderTopNavClass}`"> Home </TTab>
        <TTab value="profile" :tabClass="`${borderTopNavClass}`">
          Profile
        </TTab>
        <TTab value="settings" :tabClass="`${borderTopNavClass}`">
          Settings
        </TTab>
        <TTab value="contacts" :tabClass="`${borderTopNavClass}`">
          Contacts
        </TTab>
      </TTabs>
      <div v-if="borderTopNav === 'home'">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic. That's why it's
        important to think about your message, then choose a font that fits.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid.
      </div>
      <div v-if="borderTopNav === 'profile'">
        You've probably heard that opposites attract. The same is true for
        fonts. Don't be afraid to combine font styles that are different but
        complementary, like sans serif with serif, short with tall, or
        decorative with simple. Qui photo booth letterpress, commodo enim craft
        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
      </div>
      <div v-if="borderTopNav === 'settings'">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
        Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
        banksy irony.
      </div>
      <div v-if="borderTopNav === 'contacts'">
        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
        before they sold out master cleanse gluten-free squid scenester freegan
        cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
        cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
        banh mi before they sold out farm-to-table VHS.
      </div>
    </TCard>
    <TCard title="Icon Tabs">
      <TTabs
        v-model="iconTab"
        class="flex flex-wrap w-full text-sm font-medium text-center border-b border-slate-200 dark:border-zink-500 nav-tabs"
      >
        <TTab value="home" :tabClass="`${iconTabClass}`">
          <Home class="inline-block size-4 mr-2" /> Home
        </TTab>
        <TTab value="profile" :tabClass="`${iconTabClass}`">
          <User2 class="inline-block size-4 mr-2" /> Profile
        </TTab>
        <TTab value="settings" :tabClass="`${iconTabClass}`">
          <Settings class="inline-block size-4 mr-2" />
          Settings
        </TTab>
        <TTab value="contacts" :tabClass="`${iconTabClass}`">
          <Phone class="inline-block size-4 mr-2" />
          Contacts
        </TTab>
      </TTabs>
      <div v-if="iconTab === 'home'">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic. That's why it's
        important to think about your message, then choose a font that fits.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid.
      </div>
      <div v-if="iconTab === 'profile'">
        You've probably heard that opposites attract. The same is true for
        fonts. Don't be afraid to combine font styles that are different but
        complementary, like sans serif with serif, short with tall, or
        decorative with simple. Qui photo booth letterpress, commodo enim craft
        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
      </div>
      <div v-if="iconTab === 'settings'">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
        Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
        banksy irony.
      </div>
      <div v-if="iconTab === 'contacts'">
        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
        before they sold out master cleanse gluten-free squid scenester freegan
        cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
        cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
        banh mi before they sold out farm-to-table VHS.
      </div>
    </TCard>
    <TCard title="Arrow Nav Tabs">
      <TTabs
        v-model="arrowNavTab"
        class="flex flex-wrap w-full text-sm font-medium text-center nav-tabs"
      >
        <TTab grow value="home" :tabClass="`${arrowNavClass}`">Home </TTab>
        <TTab grow value="profile" :tabClass="`${arrowNavClass}`"
          >Profile
        </TTab>
        <TTab grow value="settings" :tabClass="`${arrowNavClass}`">
          Settings
        </TTab>
        <TTab grow value="contacts" :tabClass="`${arrowNavClass}`">
          Contacts
        </TTab>
      </TTabs>
      <div v-if="arrowNavTab === 'home'">
        They all have something to say beyond the words on the page. They can
        come across as casual or neutral, exotic or graphic. That's why it's
        important to think about your message, then choose a font that fits.
        Cosby sweater eu banh mi, qui irure terry richardson ex squid.
      </div>
      <div v-if="arrowNavTab === 'profile'">
        You've probably heard that opposites attract. The same is true for
        fonts. Don't be afraid to combine font styles that are different but
        complementary, like sans serif with serif, short with tall, or
        decorative with simple. Qui photo booth letterpress, commodo enim craft
        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
      </div>
      <div v-if="arrowNavTab === 'settings'">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out
        mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade.
        Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
        locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR
        banksy irony.
      </div>
      <div v-if="arrowNavTab === 'contacts'">
        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party
        before they sold out master cleanse gluten-free squid scenester freegan
        cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf
        cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR,
        banh mi before they sold out farm-to-table VHS.
      </div>
    </TCard>
    <TCard title="Vertical Tabs">
      <div class="gap-4 md:flex">
        <TTabs
          v-model="verticalTab"
          class="flex flex-col w-full mb-4 text-sm font-medium text-center md:w-36 shrink-0 nav-tabs md:mb-0"
        >
          <TTab grow value="home" :tabClass="`${veticalTabClass}`">Home </TTab>
          <TTab grow value="profile" :tabClass="`${veticalTabClass}`"
            >Profile
          </TTab>
          <TTab grow value="settings" :tabClass="`${veticalTabClass}`">
            Settings
          </TTab>
          <TTab grow value="contacts" :tabClass="`${veticalTabClass}`">
            Contacts
          </TTab>
        </TTabs>
        <div v-if="verticalTab === 'home'">
          <div class="block tab-pane" id="homeVertical">
            <p class="flex gap-2 mb-2 text-slate-500 dark:text-zink-200">
              <CheckSquare
                class="inline-block h-3.5 mt-1 shrink-0 text-green-500"
              />
              Raw denim you probably haven't heard of them jean shorts Austin.
              Nesciunt tofu stumptown aliqua, retro synth master cleanse.
            </p>
            <p class="flex gap-2 text-slate-500 dark:text-zink-200">
              <CheckSquare
                class="inline-block h-3.5 mt-1 shrink-0 text-green-500"
              />
              Too much or too little spacing, as in the example below, can make
              things unpleasant for the reader. The goal is to make your text as
              comfortable to read as possible.
            </p>
          </div>
        </div>
        <div v-if="verticalTab === 'profile'">
          <p class="flex gap-2 mb-2 text-slate-500 dark:text-zink-200">
            <CheckSquare
              class="inline-block h-3.5 mt-1 shrink-0 text-green-500"
            />
            In some designs, you might adjust your tracking to create a certain
            artistic effect. It can also help you fix fonts that are poorly
            spaced to begin with.
          </p>
          <p class="flex gap-2 text-slate-500 dark:text-zink-200">
            <CheckSquare
              class="inline-block h-3.5 mt-1 shrink-0 text-green-500"
            />
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
        <div v-if="verticalTab === 'settings'">
          <p class="flex gap-2 mb-2 text-slate-500 dark:text-zink-200">
            <CheckSquare
              class="inline-block h-3.5 mt-1 shrink-0 text-green-500"
            />
            Each design is a new, unique piece of art birthed into this world,
            and while you have the opportunity to be creative and make your own
            style choices.
          </p>
          <p class="flex gap-2 text-slate-500 dark:text-zink-200">
            <CheckSquare
              class="inline-block h-3.5 mt-1 shrink-0 text-green-500"
            />
            For that very reason, I went on a quest and spoke to many different
            professional graphic designers and asked them what graphic design
            tips they live.
          </p>
        </div>
        <div v-if="verticalTab === 'contacts'">
          <p class="flex gap-2 mb-2 text-slate-500 dark:text-zink-200">
            <CheckSquare
              class="inline-block h-3.5 mt-1 shrink-0 text-green-500"
            />
            For that very reason, I went on a quest and spoke to many different
            professional graphic designers and asked them what graphic design
            tips they live.
          </p>
          <p class="flex gap-2 text-slate-500 dark:text-zink-200">
            <CheckSquare
              class="inline-block h-3.5 mt-1 shrink-0 text-green-500"
            />
            Too much or too little spacing, as in the example below, can make
            things unpleasant for the reader. The goal is to make your text as
            comfortable to read as possible.
          </p>
        </div>
      </div>
    </TCard>
  </div>
</template>
