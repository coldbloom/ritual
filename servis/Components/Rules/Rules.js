import React from "react";
import ModuleCompRules from "../moduleComp/moduleCompRules/ModuleCompRules";
import ModuleCompReasons from "../moduleComp/ModuleCompReasons/ModuleCompReasons";

const mas = [
  {
    id: "r001",
    num: 1,
    number: "8-978-938-02-21",
    text: "По телефону:",
    description: "Вызвать ритуального агента",
  },
  {
    id: "r002",
    num: 2,
    number: "02",
    text: "По телефону:",
    description: "Вызвать сотрудника полиции",
  },
  {
    id: "r003df",
    num: 3,
    number: "03",
    text: "По телефону:",
    description: "Вызвать бригаду скорой помощи",
  },
  {
    id: "_id4wew",
    num: 4,
    number: null,
    text: null,
    description: "Подготовить паспорт умершего",
  },
];

const reasons = [
  "С нами надежно. Большой опыт работы на рынке ритуальных услуг!",
  "У нас гибкие цены, льготы и скидки!",
  "Индивидуальный подход к каждому клиенту!",
  "Мы работаем круглосуточно!",
];

const Rules = () => {
  return (
    <div>
      <div className="px-4 md:flex md:flex-wrap md:justify-center">
        {mas.map(({ id, ...rest }) => (
          <ModuleCompRules key={id} item={rest} />
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <div className="flex justify-center bg-blue-900 w-32">
          <a className="text-white p-2" href="">
            ПОДРОБНЕЕ
          </a>
        </div>
      </div>

      <div className="md:flex md:justify-center">
        <div className="max-w-screen-xl">
          <h2 className="flex justify-center text-xl font-medium mt-6">
            4 причины выбрать нас?
          </h2>
          <div className="px-4 md:grid md:grid-cols-4 flex flex-col">
            {reasons.map((reason) => (
              <ModuleCompReasons key={reason} value={reason} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
