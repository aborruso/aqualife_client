import DashboardLayout from 'src/pages/Aqualife/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from 'src/pages/GeneralViews/NotFoundPage.vue'
// Components Aqualife
import Home from 'src/pages/Aqualife/Components/Home/Home.vue'
import ChemicalRisk from 'src/pages/Aqualife/Components/ChemicalRisk/ChemicalRisk.vue'
import TheoreticalBiologicalRisk from 'src/pages/Aqualife/Components/TheoreticalBiologicalRisk/TheoreticalBiologicalRisk.vue'
import EmpiricalBiologicalRisk from 'src/pages/Aqualife/Components/EmpiricalBiologicalRisk/EmpiricalBiologicalRisk.vue'
import ConservationIndex from 'src/pages/Aqualife/Components/ConservationIndex/ConservationIndex.vue'

// Components pages
import Buttons from 'src/pages/Dashboard/Components/Buttons.vue'
import GridSystem from 'src/pages/Dashboard/Components/GridSystem.vue'
import Panels from 'src/pages/Dashboard/Components/Panels.vue'
import SweetAlert from 'src/pages/Dashboard/Components/SweetAlert.vue'
import Notifications from 'src/pages/Dashboard/Components/Notifications.vue'
import Icons from 'src/pages/Dashboard/Components/Icons.vue'
import Typography from 'src/pages/Dashboard/Components/Typography.vue'

// Forms pages
import RegularForms from 'src/pages/Dashboard/Forms/RegularForms.vue'
import ExtendedForms from 'src/pages/Dashboard/Forms/ExtendedForms.vue'
import ValidationForms from 'src/pages/Dashboard/Forms/ValidationForms.vue'
import Wizard from 'src/pages/Dashboard/Forms/Wizard.vue'

// Maps pages
import GoogleMaps from 'src/pages/Dashboard/Maps/GoogleMaps.vue'

let aqualifePage = {
  path: '/indexs',
  component: DashboardLayout,
  children: [
    {
      path: '/indexes/chemicalrisk',
      name: 'Chemical Risk',
      component: ValidationForms
    },
    {
      path: '/indexes/theoretiacalbiologicalrisk',
      name: 'Theoretical Biological Risk',
      component: GoogleMaps
    },
    {
      path: '/indexes/empiricalbiologicalrisk',
      name: 'Empirical Biological Risk',
      component: Wizard
    },
    {
      path: '/indexes/conservationindex',
      name: 'Conservation Index',
      component: Icons
    }
  ]
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: DashboardLayout
  },
  aqualifePage,
  {path: '*', component: NotFound}
]

export default routes
