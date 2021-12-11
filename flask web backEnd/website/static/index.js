function deleteNote(noteId)
{
    fetch("/detete-note",{method: "POST",body:JSON.stringify({noteId:noteId}),
}).then((_res)=>{
    window.location.href = "/";
});
}