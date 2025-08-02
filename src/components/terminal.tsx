import { Terminal as TerminalIcon } from 'lucide-react'
import type { FormEvent, ReactNode } from 'react'
import { useState } from 'react'
import { Contact } from './sections/contact'
import { Experiences } from './sections/experiences'
import { Help } from './sections/help'
import { Skills } from './sections/skills'
import { Welcome } from './sections/welcome'

interface Command {
  input: string
  output: ReactNode
  date: string
}

export function Terminal() {
  const [commands, setCommands] = useState<Command[]>([
    {
      input: 'welcome',
      output: <Welcome />,
      date: new Date().toISOString(),
    },
  ])

  const [input, setInput] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    let output: ReactNode

    switch (input) {
      case 'welcome':
        output = <Welcome />
        break
      case 'skills':
        output = <Skills />
        break
      case 'experiences':
        output = <Experiences />
        break
      case 'contact':
        output = <Contact />
        break
      case 'clear':
        setCommands([])
        break
      case 'help':
        output = <Help />
        break
      default:
        output = (
          <span>
            Command not found: {input}. Type <b>help</b> to see available
            commands.
          </span>
        )
        break
    }

    if (input !== 'clear') {
      setCommands([
        { input, output, date: new Date().toISOString() },
        ...commands,
      ])
    }

    setInput('')
  }

  return (
    <div className="border border-white/30 h-full rounded-md font-mono max-w-6xl mx-auto flex flex-col">
      <div className="p-2 border-b-white/30 border-b-1 flex gap-x-2 items-center">
        <TerminalIcon />
        <span className="text-sm">rossi@developer ~</span>
      </div>

      <div className="flex-1 p-4 overflow-y-auto scroll-smooth flex flex-col-reverse">
        {commands.map(command => (
          <div
            className="text-sm mt-4"
            key={command.date}
          >
            <div className="space-x-2">
              <span>$</span>
              <span className="text-white/70">{command.input}</span>
            </div>
            <div className="ml-5 mt-2">{command.output}</div>
          </div>
        ))}
      </div>

      <div className="p-2 border-t-1 border-t-white/30 flex gap-x-2">
        <span>$</span>
        <form
          className="w-full"
          onSubmit={handleSubmit}
        >
          <label
            className="sr-only"
            htmlFor="input"
          >
            Input:
          </label>
          <input
            className="outline-none w-full"
            id="input"
            onChange={event => setInput(event.target.value)}
            type="text"
            value={input}
          />
        </form>
      </div>
    </div>
  )
}
