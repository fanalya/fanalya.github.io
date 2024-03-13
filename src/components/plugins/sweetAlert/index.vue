<script lang="ts" setup>
import Swal from "sweetalert2";
import img2 from "@/assets/images/logo-sm.png";

const onBasic = () => {
  Swal.fire({
    title: "Any fool can use a computer",
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    showCloseButton: true
  });
};

const onTitle = () => {
  Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question",
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    showCloseButton: true
  });
};

const onSuccess = () => {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    showCancelButton: true,
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 ltr:mr-1 rtl:ml-1",
      cancelButton:
        "text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    showCloseButton: true
  });
};

const onError = () => {
  Swal.fire({
    title: "Oops...",
    text: "Something went wrong!",
    icon: "error",
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    footer:
      '<a href="#!" class="inline-flex items-center gap-2 mt-3 text-base font-medium text-custom-400 hover:text-custom-600">Why do I have this issue?</a>',
    showCloseButton: true
  });
};

const onLongContent = () => {
  Swal.fire({
    imageUrl: "https://placeholder.pics/svg/300x1500",
    imageHeight: 1500,
    imageAlt: "A tall image",
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20",
      cancelButton:
        "text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
    },
    confirmButtonText: "Yes, delete it!",
    buttonsStyling: false,
    showCloseButton: true
  });
};

const onWarning = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 ltr:mr-1 rtl:ml-1",
      cancelButton:
        "text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
    },
    confirmButtonText: "Yes, delete it!",
    buttonsStyling: false,
    showCloseButton: true
  }).then(function (result) {
    if (result.value) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        customClass: {
          confirmButton:
            "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
        },
        buttonsStyling: false
      });
    }
  });
};

const onParameter = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 ltr:mr-1 rtl:ml-1",
      cancelButton:
        "text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    showCloseButton: true
  }).then(function (result) {
    if (result.value) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        customClass: {
          confirmButton:
            "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
        }
      });
    } else if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error",
        customClass: {
          confirmButton:
            "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
        },
        buttonsStyling: true
      });
    }
  });
};

const onImages = () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: img2,
    imageHeight: 40,
    customClass: {
      confirmButton:
        "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    animation: false,
    showCloseButton: true
  });
};

const onTimer = () => {
  let timerInterval: any
  Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const timer: any = Swal.getPopup()?.querySelector('b')
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
    }
  })
};

const onCustomAlert = () => {
  Swal.fire({
    title: "<i>HTML</i> <u>example</u>",
    icon: "info",
    html:
      "You can use <b>bold text</b>, " +
      '<a href="//themesdesign.in/">links</a> ' +
      "and other HTML tags",
    showCloseButton: true,
    showCancelButton: true,
    customClass: {
      confirmButton:
        "text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10 ltr:mr-1 rtl:ml-1",
      cancelButton:
        "text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    confirmButtonText:
      '<i class="ri-thumb-up-fill align-bottom me-1"></i> Great!',
    cancelButtonText: '<i class="ri-thumb-down-fill align-bottom"></i>'
  });
};

const onDialog = () => {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    customClass: {
      confirmButton:
        "text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10 ltr:mr-1 rtl:ml-1",
      cancelButton:
        "text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20",
      denyButton:
        "text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:border-sky-600 active:ring active:ring-sky-100 dark:ring-sky-400/20 ltr:mr-1 rtl:ml-1"
    },
    buttonsStyling: false,
    denyButtonText: "Don't save",
    showCloseButton: true
  }).then(function (result) {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        title: "Saved!",
        icon: "success",
        customClass: {
          confirmButton:
            "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
        },
        buttonsStyling: false
      });
    } else if (result.isDenied) {
      Swal.fire({
        title: "Changes are not saved",
        icon: "info",
        customClass: {
          confirmButton:
            "text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
        },
        buttonsStyling: false
      });
    }
  });
};

const onPosition = () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
    showCloseButton: true
  });
};

const onAjaxContent = () => {
  Swal.fire({
    title: "Submit email to run ajax request",
    input: "email",
    showCancelButton: true,
    confirmButtonText: "Submit",
    showLoaderOnConfirm: true,
    customClass: {
      confirmButton:
        "text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10 ltr:mr-1 rtl:ml-1",
      cancelButton:
        "text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
    },
    buttonsStyling: false,
    showCloseButton: true,
    preConfirm: function (email) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (email === "taken@example.com") {
            reject("This email is already taken.");
          } else {
            resolve("");
          }
        }, 2000);
      });
    },
    allowOutsideClick: false
  }).then(function (email) {
    Swal.fire({
      icon: "success",
      title: "Ajax request finished!",
      customClass: {
        confirmButton:
          "text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10 ltr:mr-1 rtl:ml-1"
      },
      buttonsStyling: false,
      html: "Submitted email: " + email
    });
  });
};
</script>

<template>
  <div class="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
    <TCard title="Basic Message">
      <TButton @click="onBasic">Click Me</TButton>
    </TCard>

    <TCard title="Title">
      <TButton @click="onTitle">Click Me</TButton>
    </TCard>

    <TCard title="Success Message!">
      <TButton @click="onSuccess">Click Me</TButton>
    </TCard>

    <TCard title="Error Message!">
      <TButton @click="onError">Click Me</TButton>
    </TCard>

    <TCard title="Long Content">
      <TButton @click="onLongContent">Click Me</TButton>
    </TCard>

    <TCard title="Warning Message">
      <TButton @click="onWarning">Click Me</TButton>
    </TCard>

    <TCard title="Parameter">
      <TButton @click="onParameter">Click Me</TButton>
    </TCard>

    <TCard title="Custom Images">
      <TButton @click="onImages">Click Me</TButton>
    </TCard>

    <TCard title="Auto Close Timer">
      <TButton @click="onTimer">Click Me</TButton>
    </TCard>

    <TCard title="Custom HTML Alert">
      <TButton @click="onCustomAlert">Click Me</TButton>
    </TCard>

    <TCard title="Dialog Three Buttons">
      <TButton @click="onDialog">Click Me</TButton>
    </TCard>

    <TCard title="Position">
      <TButton @click="onPosition">Click Me</TButton>
    </TCard>

    <TCard title="Ajax Content">
      <TButton @click="onAjaxContent">Click Me</TButton>
    </TCard>
  </div>
</template>
