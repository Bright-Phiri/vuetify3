<template>
  <div class="NavBar">
    <v-navigation-drawer
      floating
      :rail="rail"
      permanent
      @click="rail = false"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      theme="dark"
    >
      <v-list class="mt-5">
        <v-list-item prepend-avatar="../logo1.png">
          <template v-slot:title>
            <span class="text-h4 font-weight-bold text-white">TaskTrek</span>
          </template>
        </v-list-item>
      </v-list>
      <v-list nav>
        <v-tooltip text="Dashboard">
          <template v-slot:activator="{ props }">
            <v-list-item class="text-white" title="Home" to="/dashbaord">
              <template v-slot:prepend>
                <v-icon v-bind="props" icon="mdi-home-outline"></v-icon>
              </template>
              <template v-slot:append>
                <v-btn size="small" icon variant="tonal">
                  <template v-slot:default>
                    <v-icon icon="mdi-menu-down" color="white"></v-icon>
                  </template>
                </v-btn>
              </template>
            </v-list-item>
          </template>
        </v-tooltip>

        <v-tooltip text="Projects">
          <template v-slot:activator="{ props }">
            <v-list-item class="text-white" title="Projects" to="/projects">
              <template v-slot:prepend>
                <v-icon v-bind="props" icon="mdi-view-grid"></v-icon>
              </template>
              <template v-slot:append>
                <v-btn density="compact" color="white" icon variant="tonal">
                  <v-icon icon="mdi-plus" size="14"></v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </template>
        </v-tooltip>

        <v-tooltip text="Tasks">
          <template v-slot:activator="{ props }">
            <v-list-item class="text-white" title="Tasks" to="/tasks">
              <template v-slot:prepend>
                <v-icon v-bind="props" icon="mdi-format-list-checks"></v-icon>
              </template>
              <template v-slot:append>
                <v-btn density="compact" color="white" icon variant="tonal">
                  <v-icon icon="mdi-plus" size="14"></v-icon>
                </v-btn>
              </template>
            </v-list-item>
          </template>
        </v-tooltip>

        <v-tooltip text="Team">
          <template v-slot:activator="{ props }">
            <v-list-item class="text-white" title="Team" to="/team">
              <template v-slot:prepend>
                <v-icon v-bind="props" icon="mdi-dots-triangle"></v-icon>
              </template>
            </v-list-item>
          </template>
        </v-tooltip>

        <v-tooltip text="Settings">
          <template v-slot:activator="{ props }">
            <v-list-item title="Settings" class="text-white" to="/settings">
              <template v-slot:prepend>
                <v-icon v-bind="props" icon="mdi-cog"></v-icon>
              </template>
            </v-list-item>
          </template>
        </v-tooltip>
      </v-list>

      <template v-slot:append>
        <v-list-item
          prepend-icon="mdi-information"
          class="text-white"
          title="Help & information"
          to="/help"
        ></v-list-item>
        <v-list-item
          class="mb-10 text-white"
          prepend-icon="mdi-logout"
          title="Log out"
          to="/logout"
        ></v-list-item>
      </template>
    </v-navigation-drawer>

    <v-app-bar density="prominent" elevation="0">
      <v-app-bar-title>
        <div class="d-flex flex-column mx-10">
          <span class="text-h3 font-weight-light">Hello, Bright</span>
          <span class="text-subtitle-2 font-weight-light"
            >Track team progress here, You almost reach a goal</span
          >
        </div>
      </v-app-bar-title>
      <template v-slot:append>
        <span>16 May, 2023</span>
        <v-btn class="mx-3" icon="mdi-calendar" variant="tonal"></v-btn>
      </template>
    </v-app-bar>
  
    <Transition name="slide-fade" mode="in-out">
      <router-view />
    </Transition>
  </div>
</template>

<script >
import { ref} from 'vue'

export default {
  setup() {
    const rail = ref(true)
    return{
      rail
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
