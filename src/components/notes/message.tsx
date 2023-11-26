import { ArrowDownToLine, MoreHorizontal, Pin, Plus } from "lucide-react";

function Message() {
  return (
    <div className="flex flex-col-reverse justify-between w-full h-[94vh]">
      {/* footer */}
      <div className="flex flex-row justify-end p-4 gap-3 mt-4">
        <button className="w-10 h-10 rounded-full flex flex-row items-center justify-center bg-white">
          <Plus className="text-black" />
        </button>
        {/* <button className="w-10 h-10 rounded-full flex flex-row items-center justify-center bg-green-400">
          <Pencil />
        </button> */}
      </div>
      {/* main */}
      <div className="flex flex-col  w-full gap-4">
        <div className="flex flex-row justify-between px-8 ">
          <div className="w-1/3 flex flex-row gap-4">
            <button>
              <Pin className="text-zinc-300" />
            </button>
            <button>
              <ArrowDownToLine className="text-zinc-300" />
            </button>
          </div>
          <div className="w-full flex flex-row justify-end gap-10">
            <button className="text-zinc-300">Updates</button>
            <button className="text-zinc-300">Share</button>
            <button className="text-zinc-300">
              <MoreHorizontal />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-full w-2/3">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src="/mainmssg2.png"
              alt=""
            />
          </div>
        </div>
        <div className="pl-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold">
              Dolor ut tempora temporibus nemo enim labore voluptatem.
            </h1>
            <div className="flex flex-row w-full mt-4">
              <div className="w-10 h-10 rounded-full bg-zinc-300">
                <img
                  src="https://i.pinimg.com/564x/7f/d7/d8/7fd7d85c9536008ee741d14c563a023b.jpg"
                  className="w-full h-full object-cover rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center ml-3">
                <p className="text-sm">G4tes</p>
                <p className="text-sm">1 min read · 19 hours ago</p>
              </div>
            </div>
            {/* <p className="text-sm">By G4tes · 19 hours ago</p> */}
          </div>
          <p className="overflow-y-auto  h-[25vh]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            voluptates necessitatibus. Voluptas unde molestiae est magni
            debitis, quasi corrupti ipsum aspernatur nihil labore quod sapiente
            ea tenetur iste dignissimos libero fugit neque cum cumque. Facilis
            cupiditate sunt aliquam vitae reiciendis quod suscipit modi sed
            autem hic excepturi illo, inventore consectetur vel, odio, ipsa
            distinctio. Pariatur soluta cupiditate, magni esse molestias sit
            repellat praesentium earum id, saepe voluptas minus odit aliquid
            animi totam similique ratione fuga autem exercitationem. Minus
            soluta autem voluptas illo ducimus, iusto cumque, aspernatur,
            laboriosam impedit quod reiciendis dolorum in exercitationem
            repudiandae expedita placeat tenetur maxime quasi at! Nihil quae
            illo itaque at similique. Fugiat laudantium ex, facilis eius eveniet
            velit, quisquam et cupiditate natus maxime esse quibusdam ab est!
            Est officiis tempora, culpa dolore, facilis accusantium, enim a fuga
            ad illum aspernatur ipsum eveniet doloribus sequi magnam aperiam.
            Facere reprehenderit obcaecati maiores ipsa amet non sunt suscipit
            quis ratione minus, delectus doloribus illum unde omnis fugit
            impedit, aliquid eaque molestiae magni culpa minima ducimus
            laudantium. Est dolorum quaerat quasi laudantium labore, expedita a?
            Voluptatum odio sit voluptate quia suscipit ad? Vel, esse quasi
            molestiae dignissimos id ratione eveniet minus praesentium
            reprehenderit illo iusto porro culpa odit quisquam? Architecto
            veniam commodi vero. Eius iusto nobis sunt temporibus doloremque
            voluptatum hic fugiat neque quos praesentium ipsum explicabo,
            exercitationem tenetur odio, sed aperiam iure similique accusamus!
            Eligendi atque labore praesentium et incidunt vel, sunt ipsam
            accusamus reiciendis delectus. Rem, assumenda veritatis voluptate
            porro consequatur et qui fuga quo saepe, excepturi unde quis esse
            quas dolore aperiam voluptas omnis, dolorem nihil debitis repellat!
            Nostrum, minus. Reprehenderit error iste maiores aperiam laboriosam
            officia, culpa numquam dicta aliquam, quia optio quisquam. Veritatis
            laboriosam esse dolor recusandae magni. Eaque nostrum quo aliquid
            aliquam sit quos illum, vel reiciendis ducimus reprehenderit,
            delectus obcaecati dolorem modi soluta. Illum laboriosam iusto illo,
            doloremque est error eius in temporibus, cum veniam vitae blanditiis
            reprehenderit non. Quisquam minus nemo perspiciatis magni
            architecto! Corrupti, quibusdam magni excepturi debitis ratione
            maiores animi quidem officia praesentium cum dolore odio quam illum
            alias omnis sint voluptas, veritatis velit saepe dignissimos, id
            delectus rem asperiores voluptatibus. Enim asperiores, recusandae
            tempora velit reiciendis ex omnis a vitae quo nihil ea error dolores
            laboriosam obcaecati odio aperiam nobis, sequi expedita possimus
            magni fuga totam. Illum accusantium possimus iure veritatis, nisi
            nostrum? Neque vel molestias magnam saepe tempora, architecto nulla
            quia veniam. Nobis voluptates a tenetur atque consequatur quisquam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
