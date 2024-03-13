<template>
    <TCard title="Changes Password">
        <form action="#!">
            <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
                <div class="xl:col-span-4">
                    <div class="relative">
                        <TInputField label="Old Password" placeholder="Enter current password" required type="password">
                            <template #suffix>
                                <i class="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i>
                            </template>
                        </TInputField>
                    </div>
                </div>
                <div class="xl:col-span-4">
                    <div class="relative">
                        <TInputField label="New Password" placeholder="Enter new password" required type="password">
                            <template #suffix>
                                <i class="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i>
                            </template>
                        </TInputField>
                    </div>
                </div>
                <div class="xl:col-span-4">
                    <div class="relative">
                        <TInputField label="Confirm Password" placeholder="Confirm password" required type="password">
                            <template #suffix>
                                <i class="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i>
                            </template>
                        </TInputField>
                    </div>
                </div>
                <div class="flex items-center xl:col-span-6">
                    <a href="javascript:void(0);" class="underline text-custom-500 text-13">Forgot Password ?</a>
                </div>
                <div class="flex justify-end xl:col-span-6">
                    <TButton color="green">
                        Change Password
                    </TButton>
                </div>
            </div>
        </form>
    </TCard>
</template>