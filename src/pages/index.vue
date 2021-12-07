<script lang="ts" setup>
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '~/stores/user'
// const { user, displayName, photoUrl } = storeToRefs(useUserStore())
</script>

<template>
  <div class="w-full flex flex-col items-center py-8 sm:py-12">
    <div class="flex flex-col items-center w-full max-w-lg gap-4">
      <router-link to="profile">
        <Avatar
          :name="displayName"
          :photo="photoUrl"
          class="vuwi-avatar-xl rounded-full overflow-hidden"
        />
      </router-link>
      <div class="text-2xl">
        <span>Welcome, {{ displayName }}</span>
      </div>
      <div class="text-center text-sm vuwi-text px-8 pb-4 md:pb-0">
        Manage your info, privacy, and security to make Uvisity work better for
        you.
      </div>
      <!-- <button @click="signout" class="btn btn-lg btn-primary font-bold w-56 mt-5">Logout</button> -->
    </div>
    <div class="p-1 md:p-8 w-full max-w-4xl grid md:grid-cols-2 gap-4">
      <router-link to="security">
        <ActionCard
          title="You have security recommendations"
          desc="Recommended actions found in the Security Checkup"
          action="Protect your account"
          icon="https://cdn2.iconfinder.com/data/icons/scenarium-vol-2-1/128/017_shield_antivirus_protection_security_check_ok_cloud-512.png"
        ></ActionCard>
      </router-link>

      <router-link v-if="user && !user.emailVerified" to="security">
        <ActionCard
          title="Account verification"
          desc="Verify your email to prevent interruptions in services"
          action="Verify my email"
          icon="https://cdn2.iconfinder.com/data/icons/scenarium-vol-1-2/128/049_email_mail_message_newsletter_signup_ok_check-512.png"
        ></ActionCard>
      </router-link>

      <router-link to="profile">
        <ActionCard
          title="Personal info"
          desc="Customize your personal info and preferences"
          action="Manage personal info"
          icon="https://cdn2.iconfinder.com/data/icons/scenarium-vol-2-1/128/031_id_card_badge_document_security_pass_woman-512.png"
        ></ActionCard>
      </router-link>

      <ActionCard
        title="Link other accounts"
        desc="Link other accounts to your profile to easily authenticate"
        action="Manage social media accounts"
        icon="https://cdn2.iconfinder.com/data/icons/scenarium-vol-18/128/018_017_social_posts_text_image-512.png"
      ></ActionCard>
    </div>
  </div>
</template>
