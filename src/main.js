import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

const supportedLocales = ['en', 'uk']
const allowedLocales = navigator.languages.filter(l => supportedLocales.includes(l))
const i18n = createI18n({
    locale: allowedLocales[0],
    fallbackLocale: supportedLocales[0]
})

createApp(App).use(i18n).mount('#app')
