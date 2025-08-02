import { skills } from '@/constants/skills'

export function Skills() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div>
          <span className="font-bold">TECHS:</span>
        </div>
        <ul>
          {skills.techs.map(tech => (
            <li
              className="flex gap-x-2 items-center"
              key={tech.name}
            >
              <tech.icon size={16} />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <div>
          <span className="font-bold">DEVELOPMENT_TOOLS:</span>
        </div>
        <ul>
          {skills.development_tools.map(devtools => (
            <li
              className="flex gap-x-2 items-center"
              key={devtools.name}
            >
              <devtools.icon size={16} />
              {devtools.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <div>
          <span className="font-bold">FRAMEWORKS/LIBS:</span>
        </div>
        <ul>
          {skills.frameworks_libs.map(framelib => (
            <li
              className="flex gap-x-2 items-center"
              key={framelib.name}
            >
              <framelib.icon size={16} />
              {framelib.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
