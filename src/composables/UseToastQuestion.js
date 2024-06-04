import { inject } from "vue";
import { toast } from "vue-toast-notification"; // Asegúrate de tener vue-toast-notification configurado

function useToastQuestion() {
  function toastQuestion(message, actions) {
    const toast = inject("toast");
    return new Promise((resolve) => {
      toast.open({
        message,
        type: "warning",
        duration: 0, // Make the toast persistent
        position: "top-right",
        dismissible: true,
        actions: actions.map((action) => ({
          text: action.text,
          onClick: () => resolve(action.value),
        })),
      });
    });
  }

  return {
    toastQuestion,
  };
}

export default useToastQuestion;
