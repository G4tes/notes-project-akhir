import React from 'react';
import { Check, Plus } from 'lucide-react';

import { addNote } from '@/stores/slices/notesSlice';
import { useDispatch } from 'react-redux';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { useToast } from '../ui/use-toast';

interface FooterMessageProps {
  setIsLoading: (value: boolean) => void;
  isLoading: boolean;
}

function FooterMessage({ setIsLoading, isLoading }: FooterMessageProps) {
  const { toast } = useToast();

  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-end p-4 gap-3 mt-4">
      <div className="w-10 h-10 rounded-full flex flex-row items-center justify-center bg-white">
        <Dialog>
          <DialogTrigger>
            <Plus className="text-black" />
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader className="flex flex-col items-center gap-4">
              <DialogTitle className="h-1 text-2xl">SlackNote</DialogTitle>
              <DialogDescription className="pt-4 text-center w-[45%]">
                Jurnal Harianmu Dimulai di Sini, Tulis Catatanmu Sekarang!
              </DialogDescription>
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  const title = (e.target as HTMLFormElement).elements[0] as HTMLInputElement;
                  const content = (e.target as HTMLFormElement).elements[1] as HTMLTextAreaElement;

                  const data = {
                    title: title.value,
                    content: content.value.replace(/\n/g, '<br />')
                  };

                  console.log(data);

                  setIsLoading(true);

                  if (data.title === '' || data.content === '') {
                    toast({
                      className: 'text-black ',
                      variant: 'destructive',
                      // @ts-expect-error error karna ada div element, harus nya title hanya menerima string saja
                      title: (
                        <div className="flex items-center">
                          <Check className="w-5 h-5 mr-2" />
                          Title atau Content tidak boleh kosong
                        </div>
                      ),
                      description: new Date().toLocaleString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                      }),
                      duration: 3500
                    });
                    setIsLoading(false);
                    return;
                  } else {
                    setTimeout(() => {
                      setIsLoading(false);
                      console.log(
                        dispatch(
                          addNote({
                            ...data,
                            createdAt: Date.now(),
                            isOpen: false
                          })
                        )
                      );
                    }, 1000);

                    toast({
                      className: 'text-black ',
                      // @ts-expect-error error karna ada div element, harus nya title hanya menerima string saja
                      title: (
                        <div className="flex items-center">
                          <Check className="w-5 h-5 mr-2" />
                          Berhasil Menambahkan Catatan
                        </div>
                      ),
                      description: new Date().toLocaleString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                      }),
                      duration: 3500
                    });

                    e.currentTarget.reset();
                  }
                }}
              >
                <input type="text" className="w-full h-10 rounded-lg px-4 bg-zinc-200" placeholder="Title" />
                <textarea
                  className="w-full h-32 rounded-lg px-4 py-2 mt-4 bg-zinc-200"
                  placeholder="Content"
                ></textarea>

                <div className="w-full flex flex-row justify-end gap-2 mt-4">
                  <DialogClose className="w-20 h-10 rounded-lg bg-zinc-200" type="reset">
                    Cancel
                  </DialogClose>
                  <DialogClose disabled={isLoading} className="w-20 h-10 rounded-lg bg-zinc-200" type="submit">
                    Save
                  </DialogClose>
                </div>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      {/* <button className="w-10 h-10 rounded-full flex flex-row items-center justify-center bg-green-400">
          <Pencil />
        </button> */}
    </div>
  );
}

export default FooterMessage;
