import CardNotes from "@/components/notes/card";
import SearchNotes from "@/components/notes/search";
import { useState, useEffect } from "react";
const notesList = [
  {
    title: "Blanditiis ut quia ut cupiditate nemo.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error suscipit hic doloribus, corrupti, nihil in tempore quibusdam officia perspiciatis voluptatem quas sint fuga quo cum excepturi dignissimos quasi nostrum doloremque.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title: "Dolor ut tempora temporibus nemo enim labore voluptatem.",
    content:
      "Quas voluptatem quo voluptatem sed. Reprehenderit animi doloremque et. Facere non sit recusandae est. Et quia nobis fugit veniam nam. Eos fugit rerum omnis. Quam qui voluptates molestiae. Aut omnis est autem maxime.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title: "Ipsam corrupti quia temporibus enim et.",
    content:
      "Eos sunt doloremque et. Quis ut iure doloribus et illo. Sit voluptatum ut possimus voluptatem. Quis beatae harum quia voluptatem id rerum. Qui sint et voluptas tempora tempore in. Quisquam quia autem doloribus. Quisquam eum enim cumque.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title: "Doloremque ad repellendus unde doloribus.",
    content:
      "Doloribus et aperiam doloremque voluptas dicta. Sunt vero quos in cumque. Quos sed optio minima qui. Consequatur doloremque et perspiciatis sunt et. Et id non saepe non modi et. Doloremque id et qui adipisci doloremque. Et voluptatem animi aut.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title:
      "Distinctio rerum aliquam quas labore dolorem voluptates reprehenderit.",
    content:
      "Quae ut doloribus autem rerum sunt. Est ut ipsa porro ea. Odio sed rerum aliquid. Ea vel quo eaque. Dolorem eligendi aspernatur et. Eos laboriosam aut laudantium. Qui ut occaecati blanditiis nam.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title: "Quis aut repellendus aut veritatis.",
    content:
      "Doloremque voluptates et deleniti autem. Voluptas voluptas rerum quia. Rerum autem et enim. Sint voluptate eaque voluptas explicabo. Molestias sunt quia ut asperiores. Molestiae sint voluptatum dolore voluptates ut. Et est at voluptatum.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title: "Temporibus et et quia et.",
    content:
      "Quisquam quod est quia. Consequatur omnis voluptate eos aut et. Quia hic rerum quam. Enim quia voluptates ut. Nulla quae voluptatem numquam. Est aliquam ut aliquid enim. Exercitationem est sed atque natus.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title: "Consectetur sequi est aut iusto.",
    content:
      "Quod accusantium ut expedita incidunt ut. Necessitatibus ut atque dolorem. Quisquam vel dolorum velit qui qui. Dignissimos et eligendi qui vero repellat. Optio et et quod doloremque. Dolorum dolorem facilis perspiciatis ut.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title: "Explicabo qui quos placeat.",
    content:
      "Explicabo et eos dolores consequatur. Qui molestiae officiis autem. Eos sit et est. Voluptas sunt quia debitis. Autem autem eum aperiam est voluptatum. Quaerat tempore maxime repellat. Ut aut quia rerum.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
  {
    title: "Sed molestiae et dignissimos.",
    content:
      "Sapiente ipsa quidem consequatur enim voluptas. Sed repellat distinctio aliquid. Quo fugit consequatur quis. Et est minus doloribus quidem. Quia ut rerum omnis. Iusto vel nesciunt a et.",
    createdAt: "2023-11-24T16:31:09.567Z",
    isOpen: false,
  },
];

function Home() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="w-full h-[93vh] flex flex-col gap-4 ">
      <div className="flex flex-row justify-center  ">
        <SearchNotes setSearch={setSearch} />
      </div>

      <h1 className="text-4xl font-semibold text-white">Notes</h1>
      <CardNotes notesList={notesList} search={search} />
    </div>
  );
}

export default Home;
