import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'

const supportedLocales = ['en', 'uk']
const allowedLocales = navigator.languages.filter(l => supportedLocales.includes(l))
function l (...args) {
    alert(JSON.stringify(args))
}

l({'navigator.languages': navigator.languages})
l({supportedLocales})
l({allowedLocales})
l({'navigator.language': navigator.language})

const i18n = createI18n({
    locale: allowedLocales[0],
    fallbackLocale: supportedLocales[0]
})

createApp(App).use(i18n).mount('#app')
