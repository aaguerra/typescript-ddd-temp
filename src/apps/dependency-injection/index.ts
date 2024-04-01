import { ContainerBuilder, Reference } from "node-dependency-injection";
import StatusGetController from "../controllers/StatusGetController";
import { BillPutController } from "../controllers/BillPutController";
import BillCreate from "../../Contexts/Bills/application/BillCreate";
import FileCourseRepository from "../../Contexts/Bills/infrastructure/FileBillRepository";

const container = new ContainerBuilder();


container.register("service.example", StatusGetController);

container.register('Bills.domain.BillRepository', FileCourseRepository);
container.register('Bills.application.BillCreate', BillCreate).addArgument(new Reference('Bills.domain.BillRepository'));
container.register('Apps.controllers.BillPutController', BillPutController).addArgument(new Reference('Bills.application.BillCreate'));

export default container;
