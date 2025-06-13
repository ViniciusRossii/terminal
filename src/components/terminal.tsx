'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import type { ReactNode, FormEvent } from 'react'
import { Terminal as TerminalIcon } from 'lucide-react'

import { Welcome } from './sections/welcome'
import { Skills } from './sections/skills'
import { Experiences } from './sections/experiences'
import { Contact } from './sections/contact'
import { Help } from './sections/help'

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
  const terminalRef = useRef<HTMLDivElement>(null)

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
        ...commands,
        { input, output, date: new Date().toISOString() },
      ])
    }

    setInput('')

    scrollToBottom()
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies:()
  useEffect(() => {
    scrollToBottom()
  }, [commands])

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [])

  return (
    <div className="border border-white/30 h-full rounded-md font-mono max-w-6xl mx-auto flex flex-col">
      <div className="p-2 border-b-white/30 border-b-1 flex gap-x-2 items-center">
        <TerminalIcon />
        <span className="text-sm">rossi@developer ~</span>
      </div>

      <div
        className="flex-1 space-y-4 p-4 overflow-auto scroll-smooth"
        ref={terminalRef}
      >
        {commands.map(command => (
          <div
            key={command.date}
            className="text-sm"
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
          onSubmit={handleSubmit}
          className="w-full"
        >
          <label
            htmlFor="input"
            className="sr-only"
          >
            Input:
          </label>
          <input
            id="input"
            type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
            className="outline-none w-full"
          />
        </form>
      </div>
    </div>
  )
}
