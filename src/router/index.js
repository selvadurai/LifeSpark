import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Demo',
    name: 'Demo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Demo/Demo.vue')
    }
  },
  
  {
    path: '/goal',
    name: 'Goal',
    component: function () {
      return import(/* webpackChunkName: "about" */  '../views/Goals/Goals.vue')
    }
     
  },
  
  {
    path: '/addGoal',
    name: 'AddGoal',
    component: function () {
      return import(/* webpackChunkName: "about" */  '../views/Goals/AddGoal.vue')
    } 
  },
  {
    path: '/addVision',
    name: 'AddVision',
    component: function () {
      return import('../views/Goals/AddVision.vue')
    } 
  },
  {
   path: '/habit',
   name: 'habit',
   component: function () {
    return import('../views/Habits/Habits.vue')
  }
 },
  {
    path: '/AddHabit',
    name: 'AddHabit',
    component: function () {
     return import('../views/Habits/AddHabit.vue')
   } 
  },
  {
    path: '/RemoveHabit',
    name: 'RemoveHabit',
    component: function () {
     return import('../views/Habits/RemoveHabit.vue')
   } 
  },

  {
    path: '/UpdateGoal',
    name: 'UpdateGoal',
    component: function () {
     return import('../views/Goals/UpdateGoal.vue')
   } 
  },
  {
    path: '/AddStep',
    name: '/AddStep',
    component: function () {
     return import('../views/Goals/AddStep.vue')
   } 
  },
  {
    path: '/GoalCycle',
    name: '/GoalCycle',
    component: function () {
     return import('../views/GoalCycle/GoalCycle.vue')
   }
  },
   {
    path: '/GoalProgress',
    name: '/GoalProgress',
    component: function () {
      return import('../views/GoalCycle/GoalProgress.vue')
    }

  },
  {
    path: '/VisionUpload',
    name: '/VisionUpload',
    component: function () {
      return import('../views/VisionBoard/VisionBoard.vue')
    }

  },
  {
    path: '/History',
    name: '/History',
    component: function () {
      return import('../views/History/History.vue')
    }

  },
  {
    path: '/AddHistory',
    name: '/AddHistory',
    component: function () {
      return import('../views/History/AddHistory.vue')
    }

  },



]

const router = new VueRouter({
  routes
})

export default router
