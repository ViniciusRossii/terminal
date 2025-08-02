import { experiences } from '@/constants/experiences'

export function Experiences() {
  return (
    <div className="space-y-8">
      {experiences.map(experience => (
        <div key={experience.description}>
          <h1>{experience.role}</h1>
          <span className="text-white/70 text-xs">
            {experience.description}
          </span>

          <ul className="list-disc mt-2 ml-4 space-y-1">
            {experience.tasks.map(task => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
