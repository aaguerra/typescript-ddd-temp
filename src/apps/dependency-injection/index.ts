import { ContainerBuilder, Definition, Reference } from "node-dependency-injection";
import StatusGetController from "../controllers/StatusGetController";
import { BillPutController } from "../controllers/BillPutController";
import BillCreate from "../../Contexts/Bills/application/BillCreate";
//import FileBillRepository from "../../Contexts/Bills/infrastructure/FileBillRepository";
import WinstonLogger from "../../Contexts/Bills/infrastructure/WinstonLogger";
import { MongoConfigFactory } from "../../Contexts/Bills/infrastructure/persistence/mongo/MongoConfigFactory";
import { MongoClientFactory } from "../../Contexts/Bills/infrastructure/persistence/mongo/MongoClientFactory";
import { MongoBillRepository } from "../../Contexts/Bills/infrastructure/persistence/MongoBillRepository";
import { MongoEnvironmentArranger } from "../../../tests/Contexts/Bills/infastructure/mongo/MongoEnvironmentArranger"


const container = new ContainerBuilder();

container.register("Shared.Logger", WinstonLogger);

container.register("service.example", StatusGetController);

let aa: Definition = new Definition();
aa.setFactory(MongoConfigFactory, 'createConfig');
container.setDefinition('App.MongoConfig', aa );

let bb: Definition = new Definition();
bb.setFactory(MongoClientFactory, 'createClient');
container.setDefinition('App.ConnectionManager', bb).addArgument('demo').addArgument(new Reference('App.MongoConfig'));;

//container.register('Bills.domain.BillRepository', FileBillRepository);
container.register('Bills.domain.BillRepository', MongoBillRepository).addArgument(new Reference('App.ConnectionManager'));
container.register('Bills.application.BillCreate', BillCreate).addArgument(new Reference('Bills.domain.BillRepository'));
container.register('Apps.controllers.BillPutController', BillPutController)
.addArgument(new Reference('Bills.application.BillCreate')).addArgument(new Reference('Shared.Logger'));

container.register('Mooc.EnvironmentArranger', MongoEnvironmentArranger)
.addArgument(new Reference('App.ConnectionManager'))

export default container;
