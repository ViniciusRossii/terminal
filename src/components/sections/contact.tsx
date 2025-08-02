import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-x-2">
        <Mail size={20} />
        <a href="mailto:viniciuslimarossi7@gmail.com">
          viniciuslimarossi7gmail.com
        </a>
      </div>

      <div className="flex items-center gap-x-2">
        <MapPin size={20} />
        <span>São Paulo, Brazil</span>
      </div>

      <div className="flex items-center gap-x-2">
        <Linkedin size={20} />
        <a href="https://www.linkedin.com/in/vinicius-rossii/">
          linkedin.com/in/vinicius-rossii/
        </a>
      </div>

      <div className="flex items-center gap-x-2">
        <Github size={20} />
        <a href="https://github.com/viniciusrossii">
          github.com/viniciusrossii
        </a>
      </div>
    </div>
  )
}
