import {ContainerBuilder} from 'node-dependency-injection'
import StatusGetController from '../controllers/StatusGetController'

const container = new ContainerBuilder()

container.register('service.example', StatusGetController)

export default container;
