import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import { AnimationFunction } from './components/animation-demo/animation'
import { MouseMoveFunction } from './components/MouseMoveDemo/MouseMove'
import ProductFunction from './components/ProductPreview/ProductDemo'
import EMI_Demo from './components/EMICalculator/EMI_Demo'
import { LoginDemo } from './components/Login_Demo/LoginDemo'
import { TimerFunction } from './components/Throttle-demo/TimerDemo'
import { CarouselDemo } from './components/carousel-demo/CarouselDemo'
import { FormikForm } from './components/formik-demo/FormikLogin'
import { FormikValidation } from './components/formik-validation/FormikValidation'
import { ValidateUser } from './components/formik-demo/yup-validation'
import { ControlledDemo } from './components/controlled-demo/controlled-demo'
import { WeatherDemo } from './controlled-components/weather-demo/weather'
import { DataDemo } from './controlled-components/data-demo/data-demo'
import { DataBinding } from './components/xmlHttpContextDemo/data-binding'
import { DebounceDemo } from './components/Throttle-demo/Debounce-demo'
import { WeatherData } from './controlled-components/weather-demo/weather-data'
import { ControlledComponent } from './controlled-components/controlled-components'
import { ShoppingIndex } from './shopping/shopping-index'
import { RouteIndex } from './components/react-routing/route-index'
import { FakestoreIndex } from './components/fakestore-routing/fakestore-index'
import { VideoIndex } from './video-library-app/video-index'
import { Register } from './components/class-component/register'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < VideoIndex/>
  </StrictMode>
)
