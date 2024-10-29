// -*- mode: js-jsx -*-
/* Bazecor -- Kaleidoscope Command Center
 * Copyright (C) 2022  DygmaLab, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

let inputs: Array<Array<string | number>> = [];
let timer = 0;
let timercap: number = null;
let on = 0;
let playing = 0;
let order = 0;

function record(info: number | string, type: string) {
  if (info === "toggle") {
    if (on === 0) {
      on = 1;
      timer = 0;
      inputs = [];
    } else {
      on = 0;
      timercap = timer;
    }
  } else {
    inputs.push([info, type, timer]);
  }
}

function play() {
  if (on === 0) {
    timer = 0;
    playing = 1;
    order = 0;
  }
}

function keydown(event: KeyboardEvent) {
  if (event.keyCode === 191) {
    record("toggle", "keydown");
  }

  if (event.keyCode === 220) {
    play();
  }
  record(event.keyCode, "keydown");
}
function keyup(event: KeyboardEvent) {
  record(event.keyCode, "keyup");
}

document.onkeyup = keyup;
document.onkeydown = keydown;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const maintime = setInterval(() => {
  timer += 1;
  if (playing === 1) {
    while ((inputs[order][2] as number) < timer) {
      const evnt = new KeyboardEvent(inputs[order][1] as string, {
        keyCode: inputs[order][0] as number,
        which: inputs[order][0] as number,
      });
      // for (var x = 0; x < document.all.length; x += 1) {
      // document.all[x].dispatchEvent(evnt);
      // }
      window.dispatchEvent(evnt);
      order += 1;
    }
    if (timer >= timercap) {
      playing = 0;
      timer = 0;
    }
  }
}, 30 / 1000);
