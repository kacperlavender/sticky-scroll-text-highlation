import { Availability, Colors, Music, SchedudlingLinks, Team, Todo } from "@/components/features/card";
import { FeatureTitle } from "@/components/features/title";


const features = [
  {
    title: "To Pimp a Butterfly",
    id: "todo-list",
    card: Todo
  },
  {
    title: "OK Computer",
    id: "colors",
    card: Colors
  },
  {
    title: "Wish You Were Here",
    id: "availability",
    card: Availability
  },
  {
    title: "Madvillany",
    id: "music",
    card: Music,
  },
  {
    title: "The Dark Side Of The Moon",
    id: "schedudling links",
    card: SchedudlingLinks,
  },
  {
    title: "In Rainbows",
    id: "team",
    card: Team
  },
];

export default function Home() {
  return (
    <div className='mx-auto max-w-6xl px-4'>
      <section className="min-h-[60vh]">
         
      </section>
      <div className='flex w-full gap-20 items-start'>
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature)=>(
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>
                  {feature.title}
                </FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex sticky top-0 h-screen items-center">
          <div className=' relative w-full aspect-square bg-gray-200 rounded-2xl'>
              {features.map(feature =>(
                <feature.card id={feature.id} key={feature.id} />
              ))}
          </div>
        </div>
      </div>
      <section className="min-h-[30vh]">
         
      </section>
    </div>
  )
}
