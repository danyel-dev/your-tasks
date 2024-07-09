from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import CreateAccountSerializer


class createAccountView(generics.CreateAPIView):
    serializer_class = CreateAccountSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

