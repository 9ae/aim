let player;
let song;

function test(){
    const TWINKLE_TWINKLE = {
        notes: [
          {pitch: 60, startTime: 0.0, endTime: 0.5},
          {pitch: 60, startTime: 0.5, endTime: 1.0},
          {pitch: 67, startTime: 1.0, endTime: 1.5},
          {pitch: 67, startTime: 1.5, endTime: 2.0},
          {pitch: 69, startTime: 2.0, endTime: 2.5},
          {pitch: 69, startTime: 2.5, endTime: 3.0},
          {pitch: 67, startTime: 3.0, endTime: 4.0},
          {pitch: 65, startTime: 4.0, endTime: 4.5},
          {pitch: 65, startTime: 4.5, endTime: 5.0},
          {pitch: 64, startTime: 5.0, endTime: 5.5},
          {pitch: 64, startTime: 5.5, endTime: 6.0},
          {pitch: 62, startTime: 6.0, endTime: 6.5},
          {pitch: 62, startTime: 6.5, endTime: 7.0},
          {pitch: 60, startTime: 7.0, endTime: 8.0},  
        ],
        totalTime: 8
    };
    player.start(TWINKLE_TWINKLE);
}

function midi(){
    Midi.fromUrl("butterfly.mid").then((midi) => {
        console.log('file', midi.tracks);
        const melody = midi.tracks[0];
        const notes = [];
        let totalTime = 0;
        melody.notes.forEach((note) => {
            notes.push({
                pitch: note.midi,
                startTime: note.time,
                endTime: note.time + note.duration
            });
            totalTime = Math.max(totalTime, note.time + note.duration);
        });
        song = {
            notes,
            totalTime
        };
        player.start(song);
    });
}

function stop(){
    player.stop();
}

window.onload = () => {
    player = new core.Player();
};
