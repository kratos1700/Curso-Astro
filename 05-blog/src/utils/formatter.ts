export  class Formatter{
    static formatDate(date: Date): string {
       const fecha = new Date(date);
       return Intl.DateTimeFormat('es-ES', {
           year: 'numeric',
           month: 'long',
           day: 'numeric',
           hour: '2-digit',
           minute: '2-digit',
       }).format(fecha);
    }
}