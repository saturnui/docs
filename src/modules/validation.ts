import { Form } from 'vee-validate'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('VuwiForm', Form)
}
