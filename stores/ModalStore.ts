
export const modalStore = defineStore('modal',  {
  state: () => ({
    showmodal: false,
    mediatype: 'video', // video, image
    medialink: '',
    mediaalt: ''
  }),
    actions: {
    toggleModal() {
      this.showmodal = !this.showmodal
    },
    setType(type: string) {
      this.mediatype = type
    },
    setLink(link: string) {
      this.medialink = link
    },
    setAlt(alt: string) {
      this.mediaalt = alt
    }
  }

})
