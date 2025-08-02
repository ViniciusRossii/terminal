import { commands } from '@/constants/commands'

export function Help() {
  return (
    <div className="space-y-2">
      <div>
        <span className="font-bold">Available commands:</span>
      </div>
      <ul>
        {commands.map(command => (
          <li key={command.command}>
            <b>{command.command}</b> - {command.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
