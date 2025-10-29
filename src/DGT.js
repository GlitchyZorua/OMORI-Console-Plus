{
  const fs = require('fs');
  const path = require("path");
  const base = path.dirname(process.mainModule.filename);

  let macros = []

  if (fs.existsSync(`${base}/save/macros.json`)) {
    macros = JSON.parse(fs.readFileSync(`${base}/save/macros.json`, "utf-8"))
  }
  saveMacros = function() {
    fs.writeFileSync(`${base}/save/macros.json`, JSON.stringify(macros))
  }

  let macroFile = "save/"
  let addMacro = function(key, cmd) {
    console.log({key, cmd})
    macros.push([key, cmd])
  }
  let removeMacroById = function(id) {
    macros.splice(id, 1)
  }
  let editMacroById = function(id, newMacro) {
    let oldKey = macros[id][0]
    macros.splice(id, 1, [oldKey, newMacro])
  }
  let removeMacrosByKey = function(key) {
    macros = macros.filter(m=>m[0] !== key)
  }
  let isMacroCommand = function(cmd) {
    return (
      cmd === 'addmacro' ||
      cmd === 'removemacro'
    )
  }
  let runCmd = function(cmd) {
    window.commands.execute(cmd)
  }
  document.addEventListener('keydown', (e) => {
    if (typeof window.commands !== 'undefined' && !window.commands.active) {
      if (e.key.length === 1) {
        macros.forEach(m=>{
          if (m[0] === e.key) {runCmd(m[1])}
        })
      }
    }
  })
  let cmd_addMacro = {
    cmd: function(handler, args) {
      if (args.length < 3) {
        handler.log("Usage: /addmacro [key] [cmd...]")
        return;
      }
      if (args[1].length !== 1) {
        handler.log("Macro key must be a single character", 'red')
        return;
      }
      if (isMacroCommand(args[2])) {
        handler.log("No.", 'red')
        return;
      }
      let cArgs = args.slice(2)
      if (cArgs[0] === 'js') {
        addMacro(args[1], cArgs.join(' '))
      } else {
        addMacro(args[1], cArgs.map(a=>`"${a}"`).join(' '))
      }
      saveMacros()
    },
    suggest: function(args) {
      if (args.length === 3) {
        return Object.keys(window.commands.commands).sort().filter(m=>!isMacroCommand(m))
      }
      if (args.length > 3) {
        if (isMacroCommand(args[2])) {
          return [args[3] + (args[3].length === 0 ? '' : ' ') + "No."]
        }
        suggestFunction = window.commands.suggestions[args[2]]
        if (suggestFunction) {
          return suggestFunction(args.slice(2))
        }
      }
      return []
    }
  }
  let cmd_removeMacro = {
    cmd: function(handler, args) {
      if (args.length < 2) {
        handler.log("Usage: /removemacro [id]")
        return;
      }
      if (!isNaN(args[1])) {
        let id = Math.floor(args[1])
        if (id > 0 && id <= macros.length) {
          removeMacroById(id - 1)
          saveMacros()
          return;
        }
      }
      handler.log("Invalid macro id", 'red')
    },
    suggest: function(args) {
      return macros.map((m, i)=>`${i+1} : ${m[0]} => ${m[1]}`)
    }
  }
  window.commands.add('addmacro', cmd_addMacro.cmd, cmd_addMacro.suggest)
  window.commands.add('removemacro', cmd_removeMacro.cmd, cmd_removeMacro.suggest)
}
