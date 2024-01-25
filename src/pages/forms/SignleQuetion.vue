<template>
  <form @submit.prevent="saveHandler">
    <div v-for="(quetion, index) in quetionsData">
      <div class="singleForm__title" :class="{ 'active': quetion.isOpened }" v-if="quetion.type === 'header'">
        <h2>{{ quetion.header }}</h2>
        <hr>
        <p>
          {{ quetion.description }}
        </p>
      </div>
      <div class="singleForm__quetion" :class="quetion.isOpened ? 'active' : ''" v-else>
        <div class="d-flex">
          <v-text-field class="singleForm__quetion__title" type="text" v-model="quetionsData[index].input_title"
            placeholder="Quetion Tilte"></v-text-field>
          <!-- <v-select :items="items" label="Default"></v-select> -->
        </div>
        <input :type="quetion.input_type">
      </div>
    </div>

    <div class="actions">
      <ul>
        <li title="Add Quetion">
          <button type="button" @click="addQuetion"><i class="fa-regular fa-square-plus"></i></button>
        </li>
        <li title="Add Title and desctription">
          <button type="button" @click="addHeader"><i class="fa-solid fa-text-height"></i></button>
        </li>
      </ul>
      <v-btn type="submit">Save</v-btn>
    </div>

    <pre class="mt-10">
        {{ quetionsData }}
    </pre>
  </form>
</template>

<script>

export default {
  name: 'SingleQuetion',
  data() {
    return {
      // key: value
    }
  },
  methods: {
    addQuetion() {
      this.$store.dispatch("forms/addQuetion", {
        formId: this.$route.params.formId,
        newIndpust: {
          id: Date.now(),
          type: "quetion",
          input_type: "select",
          input_title: "",
          isOpened: false,
          requierd: false,
          options: [],
        }
      });
    },
    addHeader() {
      this.$store.dispatch("forms/addHeader", {
        formId: this.$route.params.formId,
        newIndpust: {
          "id": Date.now(),
          "type": "header",
          "isOpened": false,
          "requierd": false,
          "header": "Dummy Header",
          "description": "Lorem ipsum dolor sit amet consectetur."
        }
      });
    },
    saveHandler() {
      this.$store.dispatch("forms/sendForm", {
        formId: this.$route.params.formId,
      })
    }


  },
  computed: {
    quetionsData() {
      return this.$store.getters['forms/getSingleForm'](this.$route.params.formId)?.form_inputs
    },
  },

}
</script>

<style lang="scss" scoped>
.active {
  border-inline-start: 6px solid #4285f4;
}

.singleForm {
  &__title {
    background-color: #fff;
    border-radius: 8px;
    border-top: 10px solid rgb(219, 68, 55);
    padding: 24px;
    margin-bottom: 0.5rem;

    h2 {
      font-size: 32px;
      font-weight: 300;
    }

    p {
      color: #94969b;
      padding-top: 1rem;
    }
  }

  &__quetion {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 0.5rem;
  }
}

.actions {
  display: flex;
  justify-content: space-between;
  padding-block: 1rem;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 10px;
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 1rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      background-color: #4285f4;
      color: #fff;
      font-size: 1.25rem;
      font-weight: 300;
      cursor: pointer;

      &:hover {
        background-color: rgb(219, 68, 55);
      }
    }
  }
}
</style>

