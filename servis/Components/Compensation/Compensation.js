import React from "react";

const Compensation = () => {
  const text = [
    "Одна из наших важнейших задач при оказании ритуальных услуг – доведение до сведения получателей наших услуг о льготах, пособиях и компенсациях, гарантированных законами РФ. И в наших силах помочь их Вам получить.",
    "Размер пособия на погребение в 2022 году после индексации социальных выплат составляет 5 946 руб.",
  ];
  const ref_data = [
    {
      id: "_num123",
      amount: "9.578 руб.",
      text: <p>Работавших граждан</p>,
      border: <div className="border-2 md:border-0"></div>,
    },
    {
      id: "_num2kpokp",
      amount: "12.383 руб.",
      text: <p>Не работавших пенсионеров</p>,
      border: <div className="border-2 md:border-0"></div>,
    },
    {
      id: "_num1adfda",
      amount: "26.787 руб.",
      text: (
        <p className="md:px-2">
          Военнослужащих
          <br />
          Сотрудников: ОВД и органов УИС
          <br />
          Должностных лиц: таможенных органов
          <br />
          государственной противопожарной службы и налоговой полиции.
          <br />
          Участников и инвалидов ВОВ]
        </p>
      ),
      border: <div className="border-2 md:border-0"></div>,
    },
    {
      id: "_num123safdas4",
      amount: "от 25.590 руб.",
      text: (
        <p>
          Военных пенсионеров
          <br /> и приравненных к ним лиц
          <br /> в размере трехмесячной пенсии
          <br /> получаемой пенсионером
          <br /> ко дню смерти.
        </p>
      ),
      border: <div className="border-2 md:border-0"></div>,
    },
    {
      id: "_num187knk",
      amount: "до 35.171 руб.",
      text: (
        <p>
          Компенсация на памятник
          <br />
          Военнослужащих
        </p>
      ),
      border: null,
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="pb-10 max-w-screen-xl">
        <h2 className="font-bold text-3xl text-center pt-20 px-2 pb-5 md:font-normal md:text-2xl md:pb-2">
          Компенсации и пособия за погребение в 2022 году
        </h2>
        <p className="text-left px-2 pb-4 text-lg md:px-10 md:text-xs md:pb-2">
          &nbsp;&nbsp;&nbsp;&nbsp;{text[0]}
        </p>
        <p className="text-left text-lg px-2 mb-6 md:px-10 md:text-xs md:mb-3">
          {text[1]}
        </p>
        <h3 className="font-bold text-lg leading-5 text-center md:font-semibold md:text-sm md:leading-3 pb-1">
          Компенсация расходов на погребение в Республике Крым для:
        </h3>

        <div className="lg:grid md:grid-cols-5 md:flex md:flex-col">
          {ref_data.map(({ id, amount, text, border }) => (
            <div
              className="flex justify-center flex-col md:justify-start md:border-r md:last:border-r-0 5"
              key={id}
            >
              <div className="flex justify-center md:border-b">
                <div className="flex justify-center px-2 bg-red-700 mt-3 mb-2 py-1">
                  <p className="font-bold text-xl text-white md:text-lg">
                    {amount}
                  </p>
                </div>
              </div>
              <div className="flex justify-center text-center mb-2 text-xs md:pt-1">
                {text}
              </div>
              {border}
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-5  max-w-screen-xl">
          {ref_data.map((item) => (
            <div className="h-10 bg-amber-800 border-r-2 last:border-r-0"></div>
          ))}
        </div> */}

        {/* <div className="grid grid-cols-4 gap-4">
          <div className="h-8 bg-amber-200"></div>
          <div className="h-8 bg-amber-300"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Compensation;
