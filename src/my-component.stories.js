import { storiesOf } from '@storybook/vue';
import VueInfoAddon from 'storybook-addon-vue-info';

import MyComponent from './my-component.vue';

storiesOf('MyComponent', module)
  .addDecorator(VueInfoAddon)
  .add('my-component', () => ({
    components: {
      'my-component': MyComponent
    },
    template: `
      <my-component
        :text="'text'"
      />
     `
  }));
