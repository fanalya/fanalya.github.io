<template>
    <TCard title="Security & Privacy">
        <div class="space-y-6">
            <div class="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                    <h4 class="text-15">Two-factor Authentication</h4>
                    <p class="mt-1 text-slate-500 dark:text-zink-200">Two-factor authentication is an enhanced security.
                        Once enabled, you'll be required to give two types of identification when you log into Google
                        Authentication and SMS are Supported.</p>
                </div>
                <div class="shrink-0">
                    <TButton classes="py-1 text-xs px-1.5">
                        Enable Two-factor Authentication
                    </TButton>
                </div>
            </div>
            <div class="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                    <h4 class="text-15">Secondary Verification</h4>
                    <p class="mt-1 text-slate-500 dark:text-zink-200">The first factor is a password and the second
                        commonly includes a text with a code sent to your smartphone, or biometrics using your
                        fingerprint, face, or retina.</p>
                </div>
                <div class="shrink-0">
                    <TButton classes="py-1 text-xs px-1.5">
                        Set up secondary method
                    </TButton>
                </div>
            </div>
            <div class="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                    <h4 class="text-15">Backup Codes</h4>
                    <p class="mt-1 text-slate-500 dark:text-zink-200">A backup code is automatically generated for you
                        when you turn on two-factor authentication through your iOS or Android Twitter app. You can also
                        generate a backup code on twitter.com.</p>
                </div>
                <div class="shrink-0">
                    <TButton classes="py-1 text-xs px-1.5">
                        Generate backup codes
                    </TButton>
                </div>
            </div>
        </div>
        <h6 class="inline-block mt-6 mb-4 underline text-15">Application Notifications:</h6>
        <div class="space-y-6">
            <div class="flex justify-between gap-2">
                <div>
                    <h4 class="text-15">Direct messages</h4>
                    <p class="mt-1 text-slate-500 dark:text-zink-200">Messages from people you follow</p>
                </div>
                <div class="shrink-0">
                    <TSwitch checked variant="soft" />
                </div>
            </div>
            <div class="flex justify-between gap-2">
                <div>
                    <h4 class="text-15">Show email notifications</h4>
                    <p class="mt-1 text-slate-500 dark:text-zink-200">Under Settings, choose Notifications. Under Select
                        an account, choose the account to enable notifications for.</p>
                </div>
                <div class="shrink-0">
                    <TSwitch checked variant="soft" />
                </div>
            </div>
            <div class="flex justify-between gap-2">
                <div>
                    <h4 class="text-15">Show chat notifications</h4>
                    <p class="mt-1 text-slate-500 dark:text-zink-200">Messages from people you follow</p>
                </div>
                <div class="shrink-0">
                    <TSwitch checked variant="soft" />
                </div>
            </div>
            <div class="flex justify-between gap-2">
                <div>
                    <h4 class="text-15">Show purchase notifications</h4>
                    <p class="mt-1 text-slate-500 dark:text-zink-200">Get real-time purchase alerts to protect yourself
                        from fraudulent charges.</p>
                </div>
                <div class="shrink-0">
                    <TSwitch checked variant="soft" />
                </div>
            </div>
        </div>
        <h6 class="inline-block mt-6 mb-4 underline text-15">Delete This Account:</h6>
        <p class="mt-1 text-slate-500 dark:text-zink-200">Go to the Data & Privacy section of your profile Account.
            Scroll to "Your data & privacy options." Delete your Profile Account. Follow the instructions to delete your
            account :</p>
        <form action="">
            <div class="max-w-xs mt-4">
                <div>
                    <TInputField placeholder="Enter password" required type="password" />
                </div>
                <div class="flex mt-4 gap-x-2">
                    <TButton variant="soft" color="red">
                        Close & delete this Account
                    </TButton>
                    <TButton variant="soft" color="slate">
                        Cancel
                    </TButton>
                </div>
            </div>
        </form>
    </TCard>
</template>