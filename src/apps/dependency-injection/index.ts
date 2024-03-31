import {ContainerBuilder} from 'node-dependency-injection'
import StatusGetController from '../controllers/StatusGetController'
import { BillPutController } from '../controllers/BillPutController'

const container = new ContainerBuilder()

container.register('service.example', StatusGetController)
container.register('Apps.controllers.BillPutController', BillPutController)

export default container;
