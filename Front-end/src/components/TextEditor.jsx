import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor(props) {

  return (
    <>
      <Editor
        apiKey= {import.meta.env.VITE_TINYMCE_API_KEY}
        onEditorChange={(content, editor) => props.parentCallback(content)}
        initialValue={props.conteudo ? props.conteudo: ""}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'preview', 'searchreplace', 'autolink', 'save', 'directionality', 'code', 'visualblocks', 'visualchars', 'image', 'link', 'media', 'codesample', 'table', 'charmap', 'nonbreaking', 'insertdatetime', 'advlist', 'lists', 'quickbars'
          ],
          toolbar: 'undo redo | blocks fontsize fontfamily | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | forecolor backcolor removeformat | hr | preview | image media link | table',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  );
}